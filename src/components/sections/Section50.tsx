'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export function Section50() {
  return (
    <Slide sectionNum={50} title="Case Study Summary">
      <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          By applying Simple Regression to our marketing data, we achieved three powerful outcomes:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-sm"
          >
            <div className="text-primary mb-4"><CheckCircle size={32} /></div>
            <h3 className="text-lg font-bold mb-2">Confirmed Relationship</h3>
            <p className="text-neutral-600 text-sm">
              We proved mathematically (r = 0.986) that Ad Spend and Sales are strongly linked.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-xl border-l-4 border-secondary shadow-sm"
          >
            <div className="text-secondary mb-4"><CheckCircle size={32} /></div>
            <h3 className="text-lg font-bold mb-2">Built a Predictor</h3>
            <p className="text-neutral-600 text-sm">
              We created a working equation (Y' = 3.917 + 6.116X) to forecast future revenue.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm"
          >
            <div className="text-green-500 mb-4"><CheckCircle size={32} /></div>
            <h3 className="text-lg font-bold mb-2">Measured Confidence</h3>
            <p className="text-neutral-600 text-sm">
              We know exactly how reliable our model is (R² = 97.2%) before presenting to management.
            </p>
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
