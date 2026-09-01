'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section29() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 29) {
      const baseData = Array.from({ length: 40 }).map((_, i) => ({
        id: `reg2-${i}`,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
      })).map(d => ({
        ...d,
        y: d.x * 0.7 + 15 + (Math.random() - 0.5) * 20,
        color: '#E8EDFF' // Dimmed points
      }));
      setData(baseData);
    } else {
      setData([]);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={29} title="Defining Regression Analysis">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Estimating an unknown <span className="font-bold text-tertiary">Y</span> value from a known <span className="font-bold text-primary">X</span> value.
        </motion.p>

        <div className="w-full max-w-3xl relative">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[0, 100]}
            yDomain={[0, 100]}
            showTrendLine={true}
            trendLineColor="#00C2A8"
            showPredictionPoint={true}
            predictionX={60}
            predictionY={57} // 60 * 0.7 + 15
          />
        </div>
      </div>
    </Slide>
  );
}

