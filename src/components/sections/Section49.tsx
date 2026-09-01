'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { Gauge } from '@/components/charts/Gauge';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section49() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [gaugeValue, setGaugeValue] = useState(0);

  useEffect(() => {
    if (currentSection >= 49) {
      const timer = setTimeout(() => setGaugeValue(0.972), 500);
      return () => clearTimeout(timer);
    } else {
      setGaugeValue(0);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={49} title="Interpreting R²">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          What does <span className="font-bold">0.972</span> actually mean? If we multiply it by 100, we get a percentage.
        </motion.p>

        <div className="w-full max-w-4xl relative h-80 pt-12 flex flex-col items-center">
          <div className="relative w-full max-w-2xl">
            <Gauge value={gaugeValue} width={600} height={300} />
            <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold font-mono text-green-500">
              97.2%
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-8 text-2xl font-medium text-center text-neutral-800"
          >
            <span className="text-green-500 font-bold">97.2%</span> of the variance in our Sales<br/>can be explained by changes in our Ad Spend.
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.5 }}
            className="text-sm text-neutral-500 mt-4"
          >
            (Only 2.8% of the variation is due to other unknown factors)
          </motion.p>
        </div>
      </div>
    </Slide>
  );
}
