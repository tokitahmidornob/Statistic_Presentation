'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section05() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (currentSection >= 5) {
      const timer = setTimeout(() => setShowChart(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setShowChart(false);
    }
  }, [currentSection]);

  const galtonData: DataPoint[] = Array.from({ length: 100 }).map((_, i) => {
    // Galton's heredity data: tall parents have tall children, but slightly regressed to mean
    const parentHeight = 64 + Math.random() * 10;
    const childHeight = parentHeight * 0.8 + 14 + (Math.random() - 0.5) * 4;
    return { id: `g-${i}`, x: parentHeight, y: childHeight, color: '#1F4FFF' };
  });

  return (
    <Slide sectionNum={5} title="The Historical Spark">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <p className="text-xl text-neutral-600 text-center mb-8">
          In 1886, Sir Francis Galton sought to understand heredity by comparing the heights of parents and their children.
        </p>

        <div className="relative w-full h-[500px] flex justify-center items-center">
          {/* Sepia Image */}
          <motion.div
            animate={{ opacity: showChart ? 0 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex justify-center items-center"
          >
            {/* The src will map to the artifact path during development, or we can use a placeholder */}
            <div className="w-[600px] h-[400px] bg-neutral-200 border-8 border-white shadow-xl flex items-center justify-center rounded overflow-hidden sepia contrast-125">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/galton_portrait_1788236395134.jpg" alt="Galton Heredity Chart" className="w-full h-full object-cover" onError={(e) => {
                 (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23e5e5e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23999">Historical Sepia Chart</text></svg>';
               }} />
            </div>
          </motion.div>

          {/* Modern Scatter Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showChart ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <ScatterChart
              data={galtonData}
              width={700}
              height={400}
              showAxes={true}
              xLabel="Parent Height (in)"
              yLabel="Child Height (in)"
            />
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
