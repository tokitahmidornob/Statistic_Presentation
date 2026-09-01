'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section14() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [showTrend, setShowTrend] = useState(false);

  const data: DataPoint[] = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: `lin-${i}`,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
    })).map(d => ({
      ...d,
      y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
      color: '#1F4FFF'
    }));
  }, []);

  useEffect(() => {
    if (currentSection >= 14) {
      const timer = setTimeout(() => setShowTrend(true), 800);
      return () => clearTimeout(timer);
    } else {
      setShowTrend(false);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={14} title="Linear Correlation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Changes occur at a <span className="font-bold text-primary">constant rate</span>, forming a straight-line pattern.
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
            trendLineColor="#00C2A8"
          />
        </div>
      </div>
    </Slide>
  );
}
