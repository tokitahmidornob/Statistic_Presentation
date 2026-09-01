'use client';

import React, { useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { regressionCaseStudyData } from '@/lib/caseStudyData';
import { motion } from 'framer-motion';

export function Section42() {
  const chartData = useMemo(() => {
    return regressionCaseStudyData.map(d => ({
      id: `point-${d.subject}`,
      x: d.adSpend,
      y: d.sales,
      color: '#1F4FFF'
    }));
  }, []);

  return (
    <Slide sectionNum={42} title="Plotting the Scatter Diagram">
      <div className="w-full flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-8"
        >
          Visually, we can see this strong relationship on a scatter diagram. As Ad Spend increases, Sales predictably rise.
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
            showTrendLine={false}
          />
        </div>
      </div>
    </Slide>
  );
}
