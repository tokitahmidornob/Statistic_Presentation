'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { motion } from 'framer-motion';

export function Section37() {
  // Good Data: Linear
  const linearData = Array.from({ length: 30 }).map((_, i) => ({
    id: `lin-${i}`, x: 10 + i * 2.5, y: 20 + i * 2 + (Math.random() - 0.5) * 15, color: '#1F4FFF'
  }));

  // Good Data: Homoscedasticity
  const homoscedasticData = Array.from({ length: 40 }).map((_, i) => ({
    id: `homo-${i}`, x: 10 + i * 2, y: 50 + (Math.random() - 0.5) * 20, color: '#00C2A8'
  }));

  // Good Data: Normality (few outliers)
  const normalData = Array.from({ length: 40 }).map((_, i) => {
    // Basic bell-curve spread on y
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    return { id: `norm-${i}`, x: 10 + i * 2, y: 50 + z * 10, color: '#FF5A5F' };
  });

  return (
    <Slide sectionNum={37} title="Key Assumptions">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          OLS regression relies on three critical assumptions to be valid.
        </motion.p>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
            <h3 className="font-bold text-primary mb-2">1. Linearity</h3>
            <p className="text-sm text-neutral-500 mb-4 text-center h-10">The relationship must be genuinely linear.</p>
            <ScatterChart data={linearData} width={300} height={200} showAxes={false} showTrendLine={true} />
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
            <h3 className="font-bold text-secondary mb-2">2. Homoscedasticity</h3>
            <p className="text-sm text-neutral-500 mb-4 text-center h-10">Equal variance of residuals along the line.</p>
            <ScatterChart data={homoscedasticData} width={300} height={200} showAxes={false} showTrendLine={true} forcedSlope={0} forcedIntercept={50} showResiduals={true} />
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
            <h3 className="font-bold text-tertiary mb-2">3. Normality</h3>
            <p className="text-sm text-neutral-500 mb-4 text-center h-10">Errors are normally distributed (no crazy outliers).</p>
            <ScatterChart data={normalData} width={300} height={200} showAxes={false} showTrendLine={true} forcedSlope={0} forcedIntercept={50} />
          </div>
        </div>
      </div>
    </Slide>
  );
}

