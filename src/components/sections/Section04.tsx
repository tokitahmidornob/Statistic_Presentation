'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section04() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [isFormed, setIsFormed] = useState(false);

  // Generate base data
  const baseData = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: `s4-${i}`,
      noiseX: Math.random() * 100,
      noiseY: Math.random() * 100,
      // Vague diagonal pattern (positive correlation with noise)
      targetX: i * (100 / 80) + (Math.random() - 0.5) * 20,
      targetY: i * (100 / 80) + (Math.random() - 0.5) * 30,
    }));
  }, []);

  const chartData: DataPoint[] = useMemo(() => {
    return baseData.map(d => ({
      id: d.id,
      x: isFormed ? d.targetX : d.noiseX,
      y: isFormed ? d.targetY : d.noiseY,
      color: isFormed ? '#1F4FFF' : '#5B6470'
    }));
  }, [baseData, isFormed]);

  // Trigger animation when the user scrolls into or past this section
  useEffect(() => {
    if (currentSection >= 4) {
      // Delay slightly for effect
      const timer = setTimeout(() => setIsFormed(true), 400);
      return () => clearTimeout(timer);
    } else {
      setIsFormed(false);
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={4} title="The Core Question">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-neutral-600 text-center max-w-3xl mb-16 font-medium"
        >
          How do we measure <span className="text-primary italic">invisible bonds</span> between variables?
        </motion.p>

        <div className="w-full max-w-3xl relative">
          <ScatterChart
            data={chartData}
            width={800}
            height={400}
            showAxes={false}
            drifting={false} 
            color="#1F4FFF"
          />
        </div>
      </div>
    </Slide>
  );
}
