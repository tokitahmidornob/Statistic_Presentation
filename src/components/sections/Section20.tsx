'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { FormulaReveal } from '@/components/charts/FormulaReveal';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section20() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (currentSection >= 20) {
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < 3) {
          currentStep++;
          setStep(currentStep);
        } else {
          clearInterval(interval);
        }
      }, 1500); // Progress highlight every 1.5s
      
      return () => clearInterval(interval);
    } else {
      setStep(0);
    }
  }, [currentSection]);

  const pearsonFormula = `r = \\frac{n(\\Sigma xy) - (\\Sigma x)(\\Sigma y)}{\\sqrt{[n\\Sigma x^2 - (\\Sigma x)^2][n\\Sigma y^2 - (\\Sigma y)^2]}}`;

  // Highlights mapped to step sequence
  // We use simple regex for replacing strings in KaTeX
  const highlights = [
    { step: 1, color: '#1F4FFF', regex: /\\Sigma xy/g }, // Step 1: cross products
    { step: 2, color: '#00C2A8', regex: /\\Sigma x\^2|\\Sigma x|\\Sigma y\^2|\\Sigma y/g }, // Step 2: individual sums & squares
    { step: 3, color: '#FF5A5F', regex: /n/g }, // Step 3: sample size
  ];

  return (
    <Slide sectionNum={20} title="The Pearson Formula">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Calculating <span className="font-serif italic font-bold">r</span> requires five key sums: the sums of X and Y, their squares, and their cross-products.
        </motion.p>

        <div className="w-full max-w-5xl relative">
          <FormulaReveal 
            formula={pearsonFormula}
            step={step}
            highlights={highlights}
          />
        </div>
        
        {/* Legend */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          className="mt-12 flex space-x-6 text-sm font-medium"
        >
          <span className="flex items-center text-primary"><div className="w-3 h-3 rounded-full bg-primary mr-2" /> Cross Products</span>
          <motion.span animate={{ opacity: step >= 2 ? 1 : 0 }} className="flex items-center text-secondary"><div className="w-3 h-3 rounded-full bg-secondary mr-2" /> Individual Sums & Squares</motion.span>
          <motion.span animate={{ opacity: step >= 3 ? 1 : 0 }} className="flex items-center text-tertiary"><div className="w-3 h-3 rounded-full bg-tertiary mr-2" /> Sample Size (n)</motion.span>
        </motion.div>
      </div>
    </Slide>
  );
}
