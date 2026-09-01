'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { FormulaReveal } from '@/components/charts/FormulaReveal';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section36() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (currentSection >= 36) {
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < 2) {
          currentStep++;
          setStep(currentStep);
        } else {
          clearInterval(interval);
        }
      }, 1500);
      return () => clearInterval(interval);
    } else {
      setStep(0);
    }
  }, [currentSection]);

  const eq = `\\text{Minimize } \\Sigma(Y - \\hat{Y})^2`;
  const highlights = [
    { step: 1, color: '#FF5A5F', regex: /Y - \\hat\{Y\}/g }, // Step 1: Residual
    { step: 2, color: '#1F4FFF', regex: /\^2/g }, // Step 2: Squared
  ];

  return (
    <Slide sectionNum={36} title="The Math of OLS">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          We square the residuals to prevent negative and positive errors from canceling each other out, penalizing large errors heavily.
        </motion.p>

        <div className="w-full max-w-3xl relative">
          <FormulaReveal 
            formula={eq}
            step={step}
            highlights={highlights}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          className="mt-12 flex space-x-6 text-sm font-medium"
        >
          <span className="flex items-center text-tertiary"><div className="w-3 h-3 rounded-full bg-tertiary mr-2" /> Residual (Error)</span>
          <motion.span animate={{ opacity: step >= 2 ? 1 : 0 }} className="flex items-center text-primary"><div className="w-3 h-3 rounded-full bg-primary mr-2" /> Squared to eliminate negatives</motion.span>
        </motion.div>
      </div>
    </Slide>
  );
}

