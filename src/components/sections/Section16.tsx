'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section16() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 16) {
      // Scatter randomly
      const randomData = Array.from({ length: 80 }).map((_, i) => {
        return { 
          id: `zero-${i}`, 
          x: Math.random() * 100, 
          y: Math.random() * 100, 
          color: '#5B6470' 
        };
      });
      setData(randomData);
    } else {
      // Initial state is tight cluster before scattering
      const initialData = Array.from({ length: 80 }).map((_, i) => {
        return { 
          id: `zero-${i}`, 
          x: 50 + (Math.random() - 0.5) * 10, 
          y: 50 + (Math.random() - 0.5) * 10, 
          color: '#1F4FFF' 
        };
      });
      setData(initialData);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={16} title="Zero Correlation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Scattered points. No discernible trend or relationship. The best-fit line flattens out.
        </motion.p>

        <div className="w-full max-w-3xl">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            showTrendLine={true}
            trendLineColor="#FF5A5F"
          />
        </div>
      </div>
    </Slide>
  );
}
