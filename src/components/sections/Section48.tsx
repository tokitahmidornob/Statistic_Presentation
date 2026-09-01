'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { FormulaReveal } from '@/components/charts/FormulaReveal';
import { motion } from 'framer-motion';

export function Section48() {
  return (
    <Slide sectionNum={48} title="Coefficient of Determination (R²)">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Calculating this is remarkably simple: we just square our correlation coefficient (r).
        </motion.p>
        
        <FormulaReveal 
          formula="R^2 = r^2" 
          step={0} 
          highlights={[]}
        />
        
        <div className="mt-8 flex flex-col items-center gap-6 text-xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-neutral-500"
          >
            Recall our correlation: <span className="font-bold text-neutral-800">r = 0.986</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex items-center gap-4 text-3xl font-bold text-primary bg-primary-light/30 px-8 py-6 rounded-2xl border-2 border-primary/20"
          >
            <span>R² = (0.986)² = 0.972</span>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
