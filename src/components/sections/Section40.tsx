'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { AnimatedTable, Column } from '@/components/charts/AnimatedTable';
import { regressionCaseStudyData } from '@/lib/caseStudyData';
import { motion } from 'framer-motion';

export const regressionColumns: Column[] = [
  { key: 'subject', header: 'Month', visibleStep: 1 },
  { key: 'adSpend', header: 'Ad Spend ($k)', visibleStep: 1 },
  { key: 'sales', header: 'Sales ($k)', visibleStep: 1 },
];

export function Section40() {
  return (
    <Slide sectionNum={40} title="The Dataset">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          We've collected data over 10 months. Our <span className="font-bold text-primary">independent variable (X)</span> is Ad Spend, and our <span className="font-bold text-secondary">dependent variable (Y)</span> is Sales.
        </motion.p>
        
        <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
          <AnimatedTable
            data={regressionCaseStudyData}
            columns={regressionColumns}
            currentStep={1}
          />
        </div>
      </div>
    </Slide>
  );
}
