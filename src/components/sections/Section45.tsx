'use client';

import React, { useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { regressionCaseStudyData } from '@/lib/caseStudyData';
import { motion } from 'framer-motion';

export function Section45() {
  const chartData = useMemo(() => {
    return regressionCaseStudyData.map(d => ({
      id: `point-${d.subject}`,
      x: d.adSpend,
      y: d.sales,
      color: '#1F4FFF'
    }));
  }, []);

  return (
    <Slide sectionNum={45} title="Drawing the Regression Line">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          We can now combine <span className="font-bold text-primary">b = 6.116</span> and <span className="font-bold text-secondary">a = 3.917</span> to draw our line of best fit: <br />
          <span className="font-mono bg-neutral-100 px-3 py-1 rounded mt-2 inline-block">Y' = 3.917 + 6.116X</span>
        </motion.p>
        
        <div className="w-full max-w-3xl bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
          <ScatterChart
            data={chartData}
            width={800}
            height={450}
            xDomain={[0, 15]}
            yDomain={[0, 80]}
            xLabel="Ad Spend ($k)"
            yLabel="Sales ($k)"
            showTrendLine={true}
            trendLineColor="#FF5A5F"
          />
        </div>
      </div>
    </Slide>
  );
}
