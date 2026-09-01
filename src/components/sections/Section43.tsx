'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { FormulaReveal } from '@/components/charts/FormulaReveal';
import { motion } from 'framer-motion';

export function Section43() {
  return (
    <Slide sectionNum={43} title="Calculating the Slope (b)">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          To draw our prediction line, we need the slope (b). This tells us how much Sales (Y) change for each $1k increase in Ad Spend (X).
        </motion.p>
        
        <FormulaReveal 
          formula="b = \frac{n(\sum XY) - (\sum X)(\sum Y)}{n(\sum X^2) - (\sum X)^2}" 
          step={0} 
          highlights={[]}
        />
        
        <div className="mt-8 flex flex-col gap-4 text-lg">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-neutral-500">Numerator:</span>
            <span>10(3,617.5) - (67.5)(452) = 5,665</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-neutral-500">Denominator:</span>
            <span>10(548.25) - (67.5)² = 926.25</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex items-center gap-4 text-2xl font-bold text-primary mt-4 bg-primary-light/30 px-6 py-4 rounded-xl"
          >
            <span>b = 5,665 / 926.25 = 6.116</span>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
