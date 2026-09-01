'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { AnimatedTable } from '@/components/charts/AnimatedTable';
import { caseStudy1Data, caseStudy1Totals } from '@/lib/caseStudyData';
import { caseStudy1Columns } from './Section21';

export function Section25() {
  return (
    <Slide sectionNum={25} title="Step 4: Summation">
      <div className="w-full flex flex-col items-center">
        <p className="text-xl text-neutral-600 text-center max-w-3xl mb-12">
          We sum up every column to get the final values needed for the Pearson formula.
        </p>

        <div className="w-full max-w-3xl">
          <AnimatedTable 
            data={caseStudy1Data} 
            columns={caseStudy1Columns} 
            currentStep={5} 
            showTotals={true}
            totals={caseStudy1Totals}
          />
        </div>
      </div>
    </Slide>
  );
}
