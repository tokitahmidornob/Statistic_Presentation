'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { AnimatedTable } from '@/components/charts/AnimatedTable';
import { caseStudy1Data } from '@/lib/caseStudyData';
import { caseStudy1Columns } from './Section21';

export function Section24() {
  return (
    <Slide sectionNum={24} title="Step 3: The Cross Product">
      <div className="w-full flex flex-col items-center">
        <p className="text-xl text-neutral-600 text-center max-w-3xl mb-12">
          Finally, we multiply X and Y for each subject to find the cross product XY.
        </p>

        <div className="w-full max-w-3xl">
          <AnimatedTable 
            data={caseStudy1Data} 
            columns={caseStudy1Columns} 
            currentStep={4} 
            highlightedCols={['xy']}
          />
        </div>
      </div>
    </Slide>
  );
}
