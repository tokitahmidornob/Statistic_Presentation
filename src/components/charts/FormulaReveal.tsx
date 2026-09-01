'use client';

import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import { motion } from 'framer-motion';

interface FormulaRevealProps {
  formula: string;
  step: number; // Controls which parts are highlighted
  highlights: { step: number; color: string; regex: RegExp }[];
}

export function FormulaReveal({ formula, step, highlights }: FormulaRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // First, apply custom coloring based on step and highlights
    let modifiedFormula = formula;
    
    highlights.forEach(h => {
      if (step >= h.step) {
        // Wrap the matched portion in a textcolor macro
        // Note: this is a simple string replacement approach, works for basic KaTeX strings
        // Must escape backslashes in regex or handle carefully
        modifiedFormula = modifiedFormula.replace(h.regex, `\\textcolor{${h.color}}{$&}`);
      }
    });

    try {
      katex.render(modifiedFormula, containerRef.current, {
        displayMode: true,
        throwOnError: false,
        trust: true,
        strict: false
      });
    } catch (e) {
      console.error("KaTeX rendering error:", e);
    }
  }, [formula, step, highlights]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white w-full px-8 py-8 rounded-3xl shadow-sm border border-neutral-100 flex justify-center flex-wrap items-center min-h-[160px] overflow-visible"
    >
      <div ref={containerRef} className="text-[clamp(0.6rem,2.5vw,1.5rem)]" />
    </motion.div>
  );
}
