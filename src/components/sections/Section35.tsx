'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section35() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [slope, setSlope] = useState<number | undefined>(0.2); // Bad slope initially
  const [intercept, setIntercept] = useState<number | undefined>(40);

  const data: DataPoint[] = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: `min-${i}`,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
    })).map(d => ({
      ...d,
      y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
      color: '#1F4FFF'
    }));
  }, []);

  useEffect(() => {
    if (currentSection >= 35) {
      const timer = setTimeout(() => {
        setSlope(undefined); // Snap to OLS, minimizing residuals
        setIntercept(undefined);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setSlope(0.2);
      setIntercept(40);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={35} title="Minimizing Distance">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          We measure the vertical distance from each point to the line (the <span className="font-bold text-tertiary">residuals</span>). The best line makes these distances as small as possible.
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
            trendLineColor="#00C2A8"
            showResiduals={true}
            forcedSlope={slope}
            forcedIntercept={intercept}
          />
        </div>
      </div>
    </Slide>
  );
}

