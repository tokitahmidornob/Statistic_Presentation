'use client';

import React, { useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { motion } from 'framer-motion';

export function Section51() {
  const data: DataPoint[] = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: `shark-${i}`,
      x: 30 + Math.random() * 60,
    })).map(d => ({
      ...d,
      y: d.x * 0.9 + (Math.random() - 0.5) * 10, // Strong correlation
      color: '#FF5A5F'
    }));
  }, []);

  return (
    <Slide sectionNum={51} title="Correlation ≠ Causation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          A strong correlation between <span className="font-bold text-tertiary">Ice Cream Sales</span> and <span className="font-bold text-red-500">Shark Attacks</span> does not mean one causes the other. Both are driven by a lurking variable: <span className="font-bold italic">Summer Heat</span>.
        </motion.p>

        <div className="w-full max-w-3xl relative">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            xLabel="Ice Cream Sales"
            yLabel="Shark Attacks"
            showTrendLine={true}
            trendLineColor="#0E1116"
          />
          
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 1 }}
            className="absolute top-[20%] left-[20%] rotate-[-15deg] border-4 border-red-500 text-red-500 font-bold text-4xl px-4 py-2 uppercase tracking-widest rounded-lg"
          >
            Not Causal
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
