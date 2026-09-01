'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';

export function Section52() {
  const concepts = [
    { title: 'Scatter Plots', desc: 'Visualizing bivariate data', color: 'primary' },
    { title: 'Pearson\'s r', desc: 'Linear correlation (-1 to +1)', color: 'secondary' },
    { title: 'Spearman\'s ρ', desc: 'Ranked correlation', color: 'tertiary' },
    { title: 'OLS Regression', desc: 'Minimizing squared errors', color: 'primary' },
    { title: 'R-Squared', desc: 'Explained variance', color: 'secondary' },
    { title: 'Prediction', desc: 'Forecasting outcomes', color: 'tertiary' },
  ];

  return (
    <Slide sectionNum={52} title="The Big Picture">
      <div className="w-full flex flex-col items-center justify-center min-h-[600px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-neutral-800 text-center max-w-3xl mb-16 font-medium"
        >
          From plotting dots on a graph to predicting the future with statistical rigor.
        </motion.p>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow border-t-4 border-t-${concept.color}`}
            >
              <h3 className={`text-xl font-bold text-${concept.color} mb-2`}>{concept.title}</h3>
              <p className="text-neutral-500">{concept.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-neutral-400 font-medium"
        >
          Presentation Complete
        </motion.div>
      </div>
    </Slide>
  );
}
