'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface DataPoint {
  x: number;
  y: number;
  id?: string;
  color?: string;
}

interface ScatterChartProps {
  data: DataPoint[];
  width?: number;
  height?: number;
  xDomain?: [number, number];
  yDomain?: [number, number];
  showAxes?: boolean;
  xLabel?: string;
  yLabel?: string;
  drifting?: boolean; // If true, uses a force simulation to drift points
  color?: string; // Default color for points
  showTrendLine?: boolean;
  trendLineColor?: string;
  forcedSlope?: number;
  forcedIntercept?: number;
  showPredictionPoint?: boolean;
  predictionX?: number;
  predictionY?: number;
  showResiduals?: boolean;
}

export function ScatterChart({
  data = [],
  width = 800,
  height = 400,
  xDomain,
  yDomain,
  showAxes = true,
  xLabel = 'X Axis',
  yLabel = 'Y Axis',
  drifting = false,
  color = '#1F4FFF',
  showTrendLine = false,
  trendLineColor = '#00C2A8',
  forcedSlope,
  forcedIntercept,
  showPredictionPoint = false,
  predictionX,
  predictionY,
  showResiduals = false,
}: ScatterChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<d3.SimulationNodeDatum, undefined> | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    
    const safeData = (data || []).filter(d => d != null && typeof d.x !== 'undefined' && typeof d.y !== 'undefined');

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // Provide safe defaults for scales if data is empty
    const defaultMinX = safeData.length ? (d3.min(safeData, d => d.x) ?? 0) : 0;
    const defaultMaxX = safeData.length ? (d3.max(safeData, d => d.x) ?? 100) : 100;
    const defaultMinY = safeData.length ? (d3.min(safeData, d => d.y) ?? 0) : 0;
    const defaultMaxY = safeData.length ? (d3.max(safeData, d => d.y) ?? 100) : 100;

    // Calculate domains if not provided
    const xMin = xDomain ? xDomain[0] : defaultMinX;
    const xMax = xDomain ? xDomain[1] : defaultMaxX;
    const yMin = yDomain ? yDomain[0] : defaultMinY;
    const yMax = yDomain ? yDomain[1] : defaultMaxY;

    const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, innerWidth]);
    const yScale = d3.scaleLinear().domain([yMin, yMax]).range([innerHeight, 0]);

    if (showAxes) {
      // X Axis
      g.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(xScale).ticks(5))
        .attr('color', '#5B6470')
        .style('font-family', 'inherit')
        .append('text')
        .attr('x', innerWidth / 2)
        .attr('y', 40)
        .attr('fill', '#0E1116')
        .text(xLabel)
        .style('font-weight', '600');

      // Y Axis
      g.append('g')
        .call(d3.axisLeft(yScale).ticks(5))
        .attr('color', '#5B6470')
        .style('font-family', 'inherit')
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -45)
        .attr('fill', '#0E1116')
        .text(yLabel)
        .style('font-weight', '600');
    }

    if (drifting) {
      // Force simulation for drifting points
      const validData = safeData;
      const nodes = validData.map((d, i) => ({
        ...d,
        id: d?.id || `node-${i}`,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));

      const circles = g.selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('r', 6)
        .attr('fill', d => d.color || color)
        .attr('opacity', 0.8)
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y));

      const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
        .force('collide', d3.forceCollide().radius(8).iterations(2))
        .force('x', d3.forceX(d => xScale((d as any).x)).strength(0.01))
        .force('y', d3.forceY(d => yScale((d as any).y)).strength(0.01))
        .on('tick', () => {
          circles
            .attr('cx', d => (d as any).x)
            .attr('cy', d => (d as any).y);
        });

      simulationRef.current = simulation;
    } else {
      // Static points with transition
      const validData = safeData;

      const circles = g.selectAll('circle')
        .data(validData, (d: any) => d?.id || (d?.x + '-' + d?.y));

      circles.enter()
        .append('circle')
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 0)
        .attr('fill', d => d.color || color)
        .attr('opacity', 0.8)
        .merge(circles as any)
        .transition()
        .duration(800)
        .ease(d3.easeCubicOut)
        .attr('cx', d => xScale(d.x))
        .attr('cy', d => yScale(d.y))
        .attr('r', 6)
        .attr('fill', d => d.color || color);

      circles.exit()
        .transition()
        .duration(400)
        .attr('r', 0)
        .remove();

      if (showTrendLine && safeData.length > 1) {
        // Compute linear regression or use forced values
        let slope = forcedSlope;
        let intercept = forcedIntercept;

        if (slope === undefined || intercept === undefined) {
          let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
          let validCount = 0;

          safeData.forEach(d => {
            sumX += d.x;
            sumY += d.y;
            sumXY += d.x * d.y;
            sumX2 += d.x * d.x;
            validCount++;
          });

          const denominator = (validCount * sumX2 - sumX * sumX);
          if (validCount === 0 || denominator === 0) {
            slope = 0;
            intercept = validCount === 0 ? 0 : sumY / validCount;
          } else {
            slope = (validCount * sumXY - sumX * sumY) / denominator;
            intercept = (sumY - slope * sumX) / validCount;
          }
        }

        const x1 = safeData.length ? (d3.min(safeData, d => d.x) ?? 0) : 0;
        const x2 = safeData.length ? (d3.max(safeData, d => d.x) ?? 100) : 100;
        const y1 = slope * x1 + intercept;
        const y2 = slope * x2 + intercept;

        const line = g.selectAll('line.trend')
          .data([{ x1, y1, x2, y2 }]);

        line.enter()
          .append('line')
          .attr('class', 'trend')
          .attr('x1', d => xScale(d.x1))
          .attr('y1', d => yScale(d.y1))
          .attr('x2', d => xScale(d.x1))
          .attr('y2', d => yScale(d.y1))
          .attr('stroke', trendLineColor)
          .attr('stroke-width', 3)
          .attr('stroke-dasharray', '5,5')
          .merge(line as any)
          .transition()
          .duration(1000)
          .ease(d3.easeCubicOut)
          .attr('x1', d => xScale(d.x1))
          .attr('y1', d => yScale(d.y1))
          .attr('x2', d => xScale(d.x2))
          .attr('y2', d => yScale(d.y2))
          .attr('stroke', trendLineColor);

        line.exit().remove();
      } else {
        g.selectAll('line.trend').remove();
      }

      // Residuals
      if (showResiduals && safeData.length > 1 && showTrendLine) {
        // We know slope and intercept from above (if showTrendLine is true)
        // Wait, they are scoped. Let's recompute or just use them if we expose them.
        let m = forcedSlope;
        let b = forcedIntercept;
        if (m === undefined || b === undefined) {
          let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
          let validCount = 0;

          safeData.forEach(d => {
            sumX += d.x;
            sumY += d.y;
            sumXY += d.x * d.y;
            sumX2 += d.x * d.x;
            validCount++;
          });

          const denominator = (validCount * sumX2 - sumX * sumX);
          if (validCount === 0 || denominator === 0) {
            m = 0;
            b = validCount === 0 ? 0 : sumY / validCount;
          } else {
            m = (validCount * sumXY - sumX * sumY) / denominator;
            b = (sumY - m * sumX) / validCount;
          }
        }

        const resLines = g.selectAll('line.residual').data(safeData);
        
        resLines.enter()
          .append('line')
          .attr('class', 'residual')
          .attr('stroke', '#FF5A5F')
          .attr('stroke-width', 2)
          .attr('stroke-dasharray', '4,4')
          .attr('opacity', 0.6)
          .attr('x1', d => xScale(d.x))
          .attr('y1', d => yScale(d.y))
          .attr('x2', d => xScale(d.x))
          .attr('y2', d => yScale(m! * d.x + b!))
          .merge(resLines as any)
          .transition()
          .duration(1000)
          .ease(d3.easeCubicOut)
          .attr('x1', d => xScale(d.x))
          .attr('y1', d => yScale(d.y))
          .attr('x2', d => xScale(d.x))
          .attr('y2', d => yScale(m! * d.x + b!));

        resLines.exit().remove();
      } else {
        g.selectAll('line.residual').remove();
      }

      // Prediction point overlay if needed
      if (showPredictionPoint && predictionX !== undefined && predictionY !== undefined) {
        const pGroup = g.selectAll('g.prediction').data([{ predictionX, predictionY }]);
        
        const enterGroup = pGroup.enter().append('g').attr('class', 'prediction');
        
        enterGroup.append('circle')
          .attr('r', 8)
          .attr('fill', '#FF5A5F')
          .attr('cx', d => xScale(d.predictionX))
          .attr('cy', d => yScale(d.predictionY));
          
        enterGroup.append('circle')
          .attr('r', 16)
          .attr('fill', 'none')
          .attr('stroke', '#FF5A5F')
          .attr('stroke-width', 2)
          .attr('cx', d => xScale(d.predictionX))
          .attr('cy', d => yScale(d.predictionY))
          .style('animation', 'pulse 2s infinite');

        const merged = enterGroup.merge(pGroup as any);
        merged.selectAll('circle')
          .attr('cx', d => xScale((d as any).predictionX))
          .attr('cy', d => yScale((d as any).predictionY));
          
        pGroup.exit().remove();
      } else {
        g.selectAll('g.prediction').remove();
      }
    }

    return () => {
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, [data, width, height, xDomain, yDomain, showAxes, xLabel, yLabel, drifting, color]);

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <svg ref={svgRef} width={width} height={height} className="max-w-full h-auto" />
    </div>
  );
}
