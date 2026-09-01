'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';

export function Section46() {
  return (
    <Slide sectionNum={46} title="Making Predictions">
      <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Let&apos;s return to our original goal: <span className="font-bold">predicting next month&apos;s sales</span>.
          <br /><br />
          Management has approved a record budget of <span className="font-bold text-primary">$12,000 (X = 12)</span>. What sales can we expect?
        </motion.p>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 max-w-2xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-2xl font-mono space-y-4"
          >
            <div>Y&apos; = a + bX</div>
            <div className="text-neutral-400">↓</div>
            <div>Y&apos; = 3.917 + 6.116(12)</div>
            <div className="text-neutral-400">↓</div>
            <div>Y&apos; = 3.917 + 73.392</div>
            <div className="text-neutral-400">↓</div>
            <motion.div 
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 1 }}
              className="font-bold text-green-600 bg-green-50 px-6 py-3 rounded-lg"
            >
              Y&apos; = 77.309
            </motion.div>
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-lg text-neutral-600 text-center max-w-2xl mt-8"
        >
          We predict sales of approximately <span className="font-bold text-neutral-900">$77,309</span>.
        </motion.p>
      </div>
    </Slide>
  );
}
