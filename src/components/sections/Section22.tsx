'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { AnimatedTable } from '@/components/charts/AnimatedTable';
import { caseStudy1Data } from '@/lib/caseStudyData';
import { caseStudy1Columns } from './Section21';

export function Section22() {
  return (
    <Slide sectionNum={22} title="Step 1: Setting up Variables">
      <div className="w-full flex flex-col items-center">
        <p className="text-xl text-neutral-600 text-center max-w-3xl mb-12">
          We designate Weight as <span className="font-bold text-primary">X</span> and Blood Pressure as <span className="font-bold text-tertiary">Y</span>.
        </p>

        <div className="w-full max-w-3xl">
          <AnimatedTable 
            data={caseStudy1Data} 
            columns={caseStudy1Columns} 
            currentStep={2} 
            highlightedCols={['x', 'y']}
          />
        </div>
      </div>
    </Slide>
  );
}
