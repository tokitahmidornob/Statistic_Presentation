'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { Gauge } from '@/components/charts/Gauge';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section26() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [gaugeValue, setGaugeValue] = useState(0);

  useEffect(() => {
    if (currentSection >= 26) {
      // Result is roughly 0.60 based on our synthetic data
      const timer = setTimeout(() => setGaugeValue(0.5966), 500);
      return () => clearTimeout(timer);
    } else {
      setGaugeValue(0);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={26} title="The Result">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Plugging the sums into our formula gives us <span className="font-bold text-primary">r = 0.5966</span>. This indicates a strong positive association between weight and blood pressure in our sample.
        </motion.p>

        <div className="w-full max-w-2xl relative h-80 pt-12">
          <Gauge value={gaugeValue} width={600} height={300} />
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold font-mono text-primary">
            0.60
          </div>
        </div>
      </div>
    </Slide>
  );
}
