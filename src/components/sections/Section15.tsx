'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section15() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 15) {
      // Morph to polynomial curve
      const polyData = Array.from({ length: 60 }).map((_, i) => {
        const x = 5 + Math.random() * 90;
        // quadratic curve
        const normalizedX = (x - 50) / 50;
        const y = 80 - (normalizedX * normalizedX * 60) + (Math.random() - 0.5) * 10;
        return { id: `poly-${i}`, x, y, color: '#1F4FFF' };
      });
      setData(polyData);
    } else {
      // Linear initial state for the morph effect when entering
      const initialData = Array.from({ length: 60 }).map((_, i) => {
        const x = 5 + Math.random() * 90;
        const y = 50 + (Math.random() - 0.5) * 10;
        return { id: `poly-${i}`, x, y, color: '#5B6470' };
      });
      setData(initialData);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={15} title="Non-Linear Correlation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Changes occur at a <span className="font-bold text-primary">fluctuating rate</span>, forming a curve.
        </motion.p>

        <div className="w-full max-w-3xl">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
          />
        </div>
      </div>
    </Slide>
  );
}
