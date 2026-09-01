'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { motion } from 'framer-motion';

export function Section38() {
  // Bad Data: Non-Linear
  const nonLinearData = Array.from({ length: 30 }).map((_, i) => {
    const nx = (i / 30) * 2 - 1;
    return { id: `nonlin-${i}`, x: 10 + i * 2.5, y: 80 - nx * nx * 60 + (Math.random() - 0.5) * 10, color: '#1F4FFF' };
  });

  // Bad Data: Heteroscedasticity (cone shape)
  const heteroscedasticData = Array.from({ length: 40 }).map((_, i) => {
    const spread = 2 + i * 0.8;
    return { id: `hetero-${i}`, x: 10 + i * 2, y: 50 + (Math.random() - 0.5) * spread, color: '#00C2A8' };
  });

  // Bad Data: Outliers
  const outlierData = Array.from({ length: 40 }).map((_, i) => {
    let y = 50 + (Math.random() - 0.5) * 15;
    if (i === 35) y = 10;
    if (i === 10) y = 90;
    return { id: `outlier-${i}`, x: 10 + i * 2, y, color: '#FF5A5F' };
  });

  return (
    <Slide sectionNum={38} title="Violating Assumptions">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          If these assumptions are violated, our predictions become unreliable and misleading.
        </motion.p>

        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
            className="flex flex-col items-center bg-red-50 p-4 rounded-xl shadow-sm border border-red-100"
          >
            <h3 className="font-bold text-red-600 mb-2">1. Curve Fitting</h3>
            <p className="text-sm text-red-800/70 mb-4 text-center h-10">A straight line fails to capture the true curve.</p>
            <ScatterChart data={nonLinearData} width={300} height={200} showAxes={false} showTrendLine={true} trendLineColor="#dc2626" />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-col items-center bg-red-50 p-4 rounded-xl shadow-sm border border-red-100"
          >
            <h3 className="font-bold text-red-600 mb-2">2. Heteroscedasticity</h3>
            <p className="text-sm text-red-800/70 mb-4 text-center h-10">Errors grow larger as X increases (cone shape).</p>
            <ScatterChart data={heteroscedasticData} width={300} height={200} showAxes={false} showTrendLine={true} forcedSlope={0} forcedIntercept={50} showResiduals={true} trendLineColor="#dc2626" />
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-col items-center bg-red-50 p-4 rounded-xl shadow-sm border border-red-100"
          >
            <h3 className="font-bold text-red-600 mb-2">3. Severe Outliers</h3>
            <p className="text-sm text-red-800/70 mb-4 text-center h-10">Massive deviations heavily pull the regression line.</p>
            <ScatterChart data={outlierData} width={300} height={200} showAxes={false} showTrendLine={true} trendLineColor="#dc2626" />
          </motion.div>
        </div>
      </div>
    </Slide>
  );
}

