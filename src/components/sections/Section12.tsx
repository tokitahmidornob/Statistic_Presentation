'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section12() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);
  const [showTrend, setShowTrend] = useState(false);

  useEffect(() => {
    if (currentSection >= 12) {
      // Points animate downward left-to-right
      const baseData = Array.from({ length: 50 }).map((_, i) => ({
        id: `neg-${i}`,
        x: 10 + i * (80/50) + (Math.random() - 0.5) * 10,
        y: 90 - i * (80/50) + (Math.random() - 0.5) * 20,
        color: '#FF5A5F'
      }));

      // Stagger points entry
      let index = 0;
      const interval = setInterval(() => {
        if (index < baseData.length) {
          setData(prev => [...prev, baseData[index]]);
          index++;
        } else {
          clearInterval(interval);
          setShowTrend(true);
        }
      }, 40);

      return () => clearInterval(interval);
    } else {
      setData([]);
      setShowTrend(false);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={12} title="Negative (Inverse) Correlation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Variables deviate in the <span className="text-tertiary font-bold">opposite direction</span>. As X increases, Y decreases.
        </motion.p>

        <div className="w-full max-w-3xl">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            showTrendLine={showTrend}
            trendLineColor="#FF5A5F"
          />
        </div>
      </div>
    </Slide>
  );
}
