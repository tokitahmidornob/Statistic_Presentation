'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { AnimatedTable } from '@/components/charts/AnimatedTable';
import { caseStudy1Data } from '@/lib/caseStudyData';
import { caseStudy1Columns } from './Section21';

export function Section23() {
  return (
    <Slide sectionNum={23} title="Step 2: Squaring the Values">
      <div className="w-full flex flex-col items-center">
        <p className="text-xl text-neutral-600 text-center max-w-3xl mb-12">
          We calculate the square of every X value and every Y value.
        </p>

        <div className="w-full max-w-3xl">
          <AnimatedTable 
            data={caseStudy1Data} 
            columns={caseStudy1Columns} 
            currentStep={3} 
            highlightedCols={['x2', 'y2']}
          />
        </div>
      </div>
    </Slide>
  );
}
