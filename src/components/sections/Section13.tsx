'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section13() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 13) {
      // Example small dataset: Volume vs Pressure (Boyle's Law P = k/V)
      const volumePressureData = Array.from({ length: 15 }).map((_, i) => {
        const v = 10 + i * 5;
        const p = 800 / v + (Math.random() - 0.5) * 5; 
        return { id: `vp${i}`, x: v, y: p, color: '#FF5A5F' };
      });
      setData(volumePressureData);
    } else {
      setData([]);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={13} title="Example: Volume & Pressure">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          In a perfect gas, as volume increases, pressure decreases in a distinct pattern.
        </motion.p>

        <div className="w-full max-w-3xl">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            xLabel="Volume (L)"
            yLabel="Pressure (atm)"
            showTrendLine={false} // it's a curve, linear trend line doesn't fit well
          />
        </div>
      </div>
    </Slide>
  );
}
