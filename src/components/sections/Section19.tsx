'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { Gauge } from '@/components/charts/Gauge';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section19() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [gaugeValue, setGaugeValue] = useState(0);

  useEffect(() => {
    if (currentSection >= 19) {
      // Animate from 0 to +1 to -1 then settle at +0.7
      const sequence = async () => {
        setGaugeValue(1); // Perfect positive
        await new Promise(r => setTimeout(r, 1600));
        setGaugeValue(-1); // Perfect negative
        await new Promise(r => setTimeout(r, 1600));
        setGaugeValue(0.7); // Strong positive
      };
      sequence();
    } else {
      setGaugeValue(0);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={19} title="The Boundaries of r">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          The value of <span className="font-serif italic font-bold">r</span> is strictly bounded. It ranges from <span className="text-tertiary font-bold">−1</span> (perfect negative) to <span className="text-secondary font-bold">+1</span> (perfect positive).
        </motion.p>

        <div className="w-full max-w-2xl relative h-80 pt-12">
          <Gauge value={gaugeValue} width={600} height={300} />
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold font-mono">
            {gaugeValue > 0 ? '+' : ''}{gaugeValue.toFixed(2)}
          </div>
        </div>
      </div>
    </Slide>
  );
}
