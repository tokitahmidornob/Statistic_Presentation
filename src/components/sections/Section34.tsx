'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section34() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [slope, setSlope] = useState<number | undefined>(undefined);
  const [intercept, setIntercept] = useState<number | undefined>(undefined);
  
  const data: DataPoint[] = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: `ols-${i}`,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
    })).map(d => ({
      ...d,
      y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
      color: '#1F4FFF'
    }));
  }, []);

  useEffect(() => {
    if (currentSection >= 34) {
      // Rapidly rotate candidates
      let count = 0;
      const interval = setInterval(() => {
        if (count < 10) {
          setSlope((Math.random() - 0.5) * 2 + 0.5);
          setIntercept(Math.random() * 50);
          count++;
        } else {
          clearInterval(interval);
          setSlope(undefined); // Snaps to OLS
          setIntercept(undefined);
        }
      }, 150);
      return () => clearInterval(interval);
    } else {
      setSlope(0);
      setIntercept(50);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={34} title="Ordinary Least Squares">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          How do we draw the &quot;perfect&quot; line? Out of infinite possibilities, we seek the one that minimizes error.
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
            trendLineColor={slope === undefined ? '#00C2A8' : '#FF5A5F'}
            forcedSlope={slope}
            forcedIntercept={intercept}
          />
        </div>
      </div>
    </Slide>
  );
}

