'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface GaugeProps {
  value: number; // between -1 and 1
  width?: number;
  height?: number;
}

export function Gauge({ value, width = 600, height = 300 }: GaugeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const safeValue = typeof value === 'number' && !isNaN(value) ? value : 0;

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const radius = Math.min(width, height * 2) / 2 - 20;
    const cx = width / 2;
    const cy = height - 20;

    const g = svg.append('g').attr('transform', `translate(${cx},${cy})`);

    // Create an arc generator for the background gauge
    const arc = d3.arc<any>()
      .innerRadius(radius - 40)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    // Gradient definition for gauge
    const defs = svg.append('defs');
    const linearGradient = defs.append('linearGradient')
      .attr('id', 'gauge-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%');
    
    linearGradient.append('stop').attr('offset', '0%').attr('stop-color', '#FF5A5F'); // Negative
    linearGradient.append('stop').attr('offset', '50%').attr('stop-color', '#E8EDFF'); // Zero (neutral)
    linearGradient.append('stop').attr('offset', '100%').attr('stop-color', '#00C2A8'); // Positive

    g.append('path')
      .datum({ endAngle: Math.PI / 2 })
      .style('fill', 'url(#gauge-gradient)')
      .attr('d', arc);

    // Axis labels (-1, 0, +1)
    const labels = [
      { text: '-1', angle: -Math.PI / 2, color: '#FF5A5F' },
      { text: '0', angle: 0, color: '#0E1116' },
      { text: '+1', angle: Math.PI / 2, color: '#00C2A8' }
    ];

    labels.forEach(l => {
      const x = Math.sin(l.angle) * (radius + 15);
      const y = -Math.cos(l.angle) * (radius + 15);
      g.append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', l.color)
        .attr('font-weight', 'bold')
        .attr('font-size', '1.25rem')
        .text(l.text);
    });

    // Needle
    const clampedValue = Math.max(-1, Math.min(1, safeValue));
    const needleAngle = (clampedValue * Math.PI) / 2; // -90deg to +90deg

    const needleLength = radius - 5;
    const needleGroup = g.append('g')
      .attr('transform', `rotate(${(needleAngle * 180) / Math.PI})`);

    needleGroup.append('path')
      .attr('d', `M -5 0 L 0 ${-needleLength} L 5 0 Z`)
      .attr('fill', '#0E1116');

    needleGroup.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 10)
      .attr('fill', '#0E1116');

    // Animate needle
    needleGroup
      .attr('transform', 'rotate(-90)')
      .transition()
      .duration(1500)
      .ease(d3.easeElasticOut.amplitude(1).period(0.5))
      .attr('transform', `rotate(${(needleAngle * 180) / Math.PI})`);

  }, [safeValue, width, height]);

  return (
    <div className="flex justify-center items-center w-full">
      <svg ref={svgRef} width={width} height={height} className="max-w-full h-auto overflow-visible" />
    </div>
  );
}
