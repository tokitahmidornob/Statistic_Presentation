'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';

export function Section27() {
  return (
    <Slide sectionNum={27} title="Other Types: Ordinal Data">
      <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Pearson&apos;s r assumes your data is continuous and linearly related. But what if your data is <span className="font-bold text-secondary">ordinal (ranked)</span>?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-primary mb-4 text-2xl font-bold">1st</div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Ranked Data</h3>
            <p className="text-neutral-600">
              When dealing with positions in a race, class rankings, or subjective ratings (1st, 2nd, 3rd), the intervals between ranks aren&apos;t necessarily equal.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary-light flex items-center justify-center text-secondary mb-4 text-2xl font-bold">ρ</div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">Spearman&apos;s Rank</h3>
            <p className="text-neutral-600">
              For this, statisticians use <span className="font-bold">Spearman&apos;s Rank Correlation Coefficient (ρ)</span>. It applies Pearson&apos;s formula not to the raw scores, but to their ranks.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
