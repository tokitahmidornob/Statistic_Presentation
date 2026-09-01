'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section32() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);
  const [slope, setSlope] = useState(0.7);

  useEffect(() => {
    if (currentSection >= 32) {
      const baseData = Array.from({ length: 40 }).map((_, i) => ({
        id: `reg3-${i}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
      })).map(d => ({
        ...d,
        y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
        color: '#E8EDFF'
      }));
      setData(baseData);
    } else {
      setData([]);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={32} title="The Slope (b)">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          The change in Y for every 1-unit increase in X. Drag the slider to adjust the slope.
        </motion.p>

        <div className="w-full max-w-3xl mb-8">
          <ScatterChart
            data={data}
            width={800}
            height={400}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            showTrendLine={true}
            trendLineColor="#00C2A8"
            forcedSlope={slope}
            forcedIntercept={15}
          />
        </div>
        
        <div className="w-full max-w-xl flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
          <span className="font-bold text-neutral-900 w-16">b = {slope.toFixed(2)}</span>
          <input 
            type="range" 
            min="-1.5" 
            max="1.5" 
            step="0.05" 
            value={slope} 
            onChange={(e) => setSlope(parseFloat(e.target.value))}
            className="flex-1 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-secondary"
          />
        </div>
      </div>
    </Slide>
  );
}

