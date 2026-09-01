'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';

export function Section18() {
  return (
    <Slide sectionNum={18} title="Coefficient of Correlation">
      <div className="w-full flex flex-col items-center relative overflow-hidden">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12 z-10"
        >
          Meet <span className="font-bold text-primary font-serif">r</span> (Pearson&apos;s correlation coefficient). It is the standardized slope that measures the degree of linear association between two variables.
        </motion.p>

        <div className="relative w-full h-80 flex justify-center items-center">
          {/* Pulsing background rings */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute w-64 h-64 rounded-full border-4 border-primary"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
            className="absolute w-48 h-48 rounded-full border-4 border-primary"
          />
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            className="z-10 text-[12rem] font-serif font-bold text-primary leading-none"
          >
            r
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}
