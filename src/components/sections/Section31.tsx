'use client';

import React, { useState, useEffect } from 'react';
import { Slide } from '@/components/layout/Slide';
import { FormulaReveal } from '@/components/charts/FormulaReveal';
import { usePresentationStore } from '@/store/usePresentationStore';
import { motion } from 'framer-motion';

export function Section31() {
  const currentSection = usePresentationStore(state => state.currentSection);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (currentSection >= 31) {
      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < 1) {
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

  const eq = `\\hat{Y} = a + bX`;
  const highlights = [
    { step: 1, color: '#FF5A5F', regex: /\\hat\{Y\}/g }, 
  ];

  return (
    <Slide sectionNum={31} title="The Equation">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12"
        >
          Any straight line can be defined by two values: the <span className="font-bold text-primary">intercept (a)</span> and the <span className="font-bold text-secondary">slope (b)</span>.
        </motion.p>

        <div className="w-full max-w-2xl relative">
          <FormulaReveal 
            formula={eq}
            step={step}
            highlights={highlights}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          className="mt-12 text-sm font-medium text-tertiary flex items-center"
        >
          <div className="w-3 h-3 rounded-full bg-tertiary mr-2" />
          The &quot;hat&quot; denotes it is a predicted value, not an observed one.
        </motion.div>
      </div>
    </Slide>
  );
}

