'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { AnimatedTable, Column } from '@/components/charts/AnimatedTable';
import { caseStudy1Data } from '@/lib/caseStudyData';
import { motion } from 'framer-motion';

export const caseStudy1Columns: Column[] = [
  { key: 'subject', header: 'Subject', visibleStep: 1 },
  { key: 'x', header: 'Weight (kg)', visibleStep: 1, color: 'primary' },
  { key: 'y', header: 'Blood Pressure', visibleStep: 1, color: 'tertiary' },
  { key: 'x2', header: <span>X<sup>2</sup></span>, visibleStep: 3 },
  { key: 'y2', header: <span>Y<sup>2</sup></span>, visibleStep: 3 },
  { key: 'xy', header: 'XY', visibleStep: 4 },
];

export function Section21() {
  return (
    <Slide sectionNum={21} title="Clinical Study Data">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Let&apos;s apply the Pearson formula to a sample of 10 patients, comparing their weight to their systolic blood pressure.
        </motion.p>

        <div className="w-full max-w-3xl">
          <AnimatedTable 
            data={caseStudy1Data} 
            columns={caseStudy1Columns} 
            currentStep={1} 
          />
        </div>
      </div>
    </Slide>
  );
}
