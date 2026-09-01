'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section33() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 33) {
      const baseData = Array.from({ length: 40 }).map((_, i) => ({
        id: `reg4-${i}`,
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
    <Slide sectionNum={33} title="The Intercept (a)">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          The anchor point of our line: the expected value of Y when X is exactly zero.
        </motion.p>

        <div className="w-full max-w-3xl relative">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[-20, 100]} // Zoom out to show x=0 intersection clearly
            yDomain={[-20, 100]}
            showTrendLine={true}
            trendLineColor="#00C2A8"
            showPredictionPoint={true}
            predictionX={0}
            predictionY={15} // Forced intercept
            forcedSlope={0.7}
            forcedIntercept={15}
          />
        </div>
      </div>
    </Slide>
  );
}

