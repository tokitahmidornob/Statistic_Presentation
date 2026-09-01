'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart, DataPoint } from '@/components/charts/ScatterChart';
import { usePresentationStore } from '@/store/usePresentationStore';

export function Section06() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (currentSection >= 6) {
      // Simulate data "dropping in" by staggering the generation
      const baseData = Array.from({ length: 80 }).map((_, i) => {
        const parentHeight = 64 + Math.random() * 12; // 64 to 76 inches
        // Child height regresses toward mean (approx 68)
        const mean = 68;
        const childHeight = mean + 0.6 * (parentHeight - mean) + (Math.random() - 0.5) * 4;
        return { id: `g2-${i}`, x: parentHeight, y: childHeight, color: '#00C2A8' };
      });
      
      setData(baseData);
    } else {
      setData([]); // clear out when not in section for re-entry animation
    }
  }, [currentSection]);

  return (
    <Slide sectionNum={6} title="Regression to Mediocrity">
      <div className="w-full flex flex-col items-center">
        <p className="text-xl text-neutral-600 text-center max-w-3xl mb-8">
          He observed that extremely tall parents had children who were tall, but <span className="font-semibold text-primary">less tall</span> than themselves. Their heights &quot;regressed&quot; toward the average.
        </p>

        <div className="w-full max-w-3xl">
          <ScatterChart
            data={data}
            width={800}
            height={450}
            showAxes={true}
            xDomain={[62, 78]}
            yDomain={[62, 78]}
            xLabel="Parent Height (inches)"
            yLabel="Child Height (inches)"
            color="#00C2A8"
          />
        </div>
      </div>
    </Slide>
  );
}
