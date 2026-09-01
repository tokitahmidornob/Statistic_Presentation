'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

export function Section39() {
  return (
    <Slide sectionNum={39} title="The Real-Life Problem">
      <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Let&apos;s apply everything we&apos;ve learned to a practical business problem: <span className="font-bold text-primary">Marketing ROI</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <DollarSign size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">The Investment (X)</h3>
            <p className="text-neutral-600">
              A company spends varying amounts on digital advertising each month (in thousands of dollars).
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2">The Return (Y)</h3>
            <p className="text-neutral-600">
              They track the resulting sales revenue for each month (in thousands of dollars).
            </p>
          </motion.div>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg font-medium text-neutral-800 mt-12 bg-neutral-100 px-6 py-3 rounded-full"
        >
          Goal: Can we predict next month's sales based on our ad budget?
        </motion.p>
      </div>
    </Slide>
  );
}
