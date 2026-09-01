'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section28() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);
  const [showTrend, setShowTrend] = useState(false);

  useEffect(() => {
    if (currentSection >= 28) {
      // Points fade out, line remains
      const initialData = Array.from({ length: 40 }).map((_, i) => ({
        id: `reg-${i}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
      })).map(d => ({
        ...d,
        y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
        color: 'transparent' // Make points transparent to leave just the line
      }));
      setData(initialData);
      
      const timer = setTimeout(() => setShowTrend(true), 100);
      return () => clearTimeout(timer);
    } else {
      setData([]);
      setShowTrend(false);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={28} title="Transitioning to Regression">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Correlation establishes the bond. <span className="font-bold text-primary">Regression</span> puts it to work, allowing us to predict one variable from another.
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
            trendLineColor="#1F4FFF"
          />
        </div>
      </div>
    </Slide>
  );
}

