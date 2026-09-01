'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section08() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 8) {
      // Staggered entrance by slowly adding points to state
      const targetData = Array.from({ length: 20 }).map((_, i) => ({
        id: `stagger-${i}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        color: '#1F4FFF'
      }));
      
      let index = 0;

      const interval = setInterval(() => {
        if (index < targetData.length) {
          setData(prev => [...prev, targetData[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      setData([]);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={8} title="The Scatter Diagram">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Plotting data pairs (X, Y) on a coordinate plane visually reveals patterns. Each dot represents one subject&apos;s measurement on both variables.
        </motion.p>

        <div className="w-full max-w-3xl bg-white p-6 rounded-3xl shadow-sm border border-neutral-100 relative">
          <ScatterChart
            data={data}
            width={750}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            xLabel="Measurement X"
            yLabel="Measurement Y"
          />
        </div>
      </div>
    </Slide>
  );
}
