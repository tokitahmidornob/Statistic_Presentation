'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';
import { Target, HelpCircle } from 'lucide-react';

export function Section47() {
  return (
    <Slide sectionNum={47} title="Evaluating the Model">
      <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Our prediction of $77.3k sounds precise, but <span className="font-bold text-primary">how confident should we be?</span> Is Ad Spend truly driving these sales, or is it just a coincidence?
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-3xl">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center max-w-[250px] text-center"
          >
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-400 mb-4">
              <HelpCircle size={40} />
            </div>
            <h3 className="font-bold text-lg mb-2">The Unknown</h3>
            <p className="text-sm text-neutral-500">Sales fluctuate for many reasons: seasonality, competitor actions, economic trends.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl font-bold text-neutral-300"
          >
            VS
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center max-w-[250px] text-center"
          >
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center text-primary mb-4">
              <Target size={40} />
            </div>
            <h3 className="font-bold text-lg mb-2">Our Model</h3>
            <p className="text-sm text-neutral-500">How much of that fluctuation is specifically explained by our Ad Spend?</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 bg-neutral-50 px-8 py-4 rounded-xl border border-neutral-200"
        >
          <p className="font-medium text-neutral-800">
            To answer this, we need the <span className="font-bold">Coefficient of Determination</span>.
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
