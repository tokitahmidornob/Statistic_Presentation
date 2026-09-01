'use client';

import React, { useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { motion } from 'framer-motion';

export function Section01() {
  // Generate ~150 random data points for the initial drift
  const initialData: DataPoint[] = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: `s1-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: '#0E1116' // very dark for the intro
    }));
  }, []);

  return (
    <Slide sectionNum={1} title="The Mathematics of Connection">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full flex flex-col items-center relative"
      >
        <p className="text-xl text-neutral-600 max-w-2xl text-center mb-12">
          An interactive journey through correlation and regression, where we explore the invisible bonds between variables.
        </p>

        <div className="w-full max-w-4xl relative">
          {/* We use a drifting scatter chart here to create the 'random noise' effect */}
          <ScatterChart
            data={initialData}
            width={900}
            height={500}
            showAxes={false}
            drifting={true}
            color="#5B6470"
          />
        </div>
      </motion.div>
    </Slide>
  );
}
