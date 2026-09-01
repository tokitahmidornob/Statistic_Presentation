'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section11() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 11) {
      // Example small dataset: Height (cm) vs Weight (kg)
      // Heights around 150-190cm, Weights around 50-90kg
      const heightWeightData = [
        { id: 'hw1', x: 155, y: 55, color: '#1F4FFF' },
        { id: 'hw2', x: 160, y: 60, color: '#1F4FFF' },
        { id: 'hw3', x: 162, y: 58, color: '#1F4FFF' },
        { id: 'hw4', x: 168, y: 65, color: '#1F4FFF' },
        { id: 'hw5', x: 172, y: 70, color: '#1F4FFF' },
        { id: 'hw6', x: 175, y: 68, color: '#1F4FFF' },
        { id: 'hw7', x: 178, y: 75, color: '#1F4FFF' },
        { id: 'hw8', x: 182, y: 80, color: '#1F4FFF' },
        { id: 'hw9', x: 185, y: 82, color: '#1F4FFF' },
        { id: 'hw10', x: 190, y: 88, color: '#1F4FFF' },
      ];
      setData(heightWeightData);
    } else {
      setData([]);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={11} title="Example: Heights & Weights">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Taller students generally weigh more. The correlation is clearly positive.
        </motion.p>

        <div className="w-full max-w-3xl">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[140, 200]}
            yDomain={[40, 100]}
            xLabel="Height (cm)"
            yLabel="Weight (kg)"
            showTrendLine={true}
            trendLineColor="#00C2A8"
          />
        </div>
      </div>
    </Slide>
  );
}
