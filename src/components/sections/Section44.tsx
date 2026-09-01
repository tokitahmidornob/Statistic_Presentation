'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { FormulaReveal } from '@/components/charts/FormulaReveal';
import { motion } from 'framer-motion';

export function Section44() {
  return (
    <Slide sectionNum={44} title="Calculating the Intercept (a)">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Next, we find the y-intercept (a). This is the theoretical sales value if our ad spend was exactly zero.
        </motion.p>
        
        <FormulaReveal 
          formula="a = \bar{Y} - b\bar{X}" 
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
            <span className="font-mono text-neutral-500">Mean of Y:</span>
            <span>452 / 10 = 45.2</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-neutral-500">Mean of X:</span>
            <span>67.5 / 10 = 6.75</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="flex items-center gap-4 text-2xl font-bold text-secondary mt-4 bg-secondary-light/30 px-6 py-4 rounded-xl"
          >
            <span>a = 45.2 - (6.116 × 6.75) = 3.917</span>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
