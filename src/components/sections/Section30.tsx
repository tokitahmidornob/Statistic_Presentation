'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section30() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);
  const [showTrend, setShowTrend] = useState(false);

  useEffect(() => {
    if (currentSection >= 30) {
      const baseData = Array.from({ length: 40 }).map((_, i) => ({
        id: `reg2-${i}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
      })).map(d => ({
        ...d,
        y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
        color: '#1F4FFF'
      }));
      setData(baseData);
      
      const timer = setTimeout(() => setShowTrend(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setData([]);
      setShowTrend(false);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={30} title="Bivariate Regression">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          We fit the &quot;closest&quot; straight line through the scattered coordinates to use as our predictive model.
        </motion.p>

        <div className="w-full max-w-3xl relative">
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

