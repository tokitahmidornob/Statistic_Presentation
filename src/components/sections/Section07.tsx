'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section07() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 7) {
      // Modern clear data points for modern correlation definition
      const baseData = Array.from({ length: 40 }).map((_, i) => ({
        id: `m-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: '#1F4FFF'
      }));
      setData(baseData);
    } else {
      setData([]);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={7} title="Modern Correlation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-neutral-600 text-center max-w-4xl mb-12 leading-relaxed"
        >
          A statistical measure that expresses the extent to which two variables are linearly related. It assesses the <span className="text-primary font-bold">strength</span> and <span className="text-secondary font-bold">direction</span> of association.
        </motion.p>

        <div className="w-full max-w-4xl opacity-50">
          <ScatterChart
            data={data}
            width={900}
            height={400}
            showAxes={true}
            xLabel="Variable X"
            yLabel="Variable Y"
          />
        </div>
      </div>
    </Slide>
  );
}
