'use client';

import React, { useMemo } from 'react';
import { Slide } from '@/components/layout/Slide';
import { ScatterChart } from '@/components/charts/ScatterChart';
import { motion } from 'framer-motion';

export function Section09() {
  const generateData = (type: 'positive' | 'negative' | 'linear' | 'zero') => {
    return Array.from({ length: 40 }).map((_, i) => {
      const x = (i / 11) * 80 + 10;
      let y = 0;
      switch (type) {
        case 'positive':
          y = x * 0.8 + (Math.random() - 0.5) * 30 + 10;
          break;
        case 'negative':
          y = (100 - x) * 0.8 + (Math.random() - 0.5) * 30 + 10;
          break;
        case 'linear':
          y = x * 0.9 + (Math.random() - 0.5) * 10 + 5;
          break;
        case 'zero':
          y = Math.random() * 100;
          break;
      }
      return { id: `${type}-${i}`, x, y, color: '#1F4FFF' };
    });
  };

  const datasets = useMemo(() => ({
    positive: generateData('positive'),
    negative: generateData('negative'),
    linear: generateData('linear'),
    zero: generateData('zero'),
  }), []);

  return (
    <Slide sectionNum={9} title="Types of Correlation">
      <div className="w-full grid grid-cols-2 gap-8 max-w-4xl">
        {[
          { title: 'Positive', data: datasets.positive },
          { title: 'Negative', data: datasets.negative },
          { title: 'Linear', data: datasets.linear },
          { title: 'Zero', data: datasets.zero }
        ].map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 flex flex-col items-center"
          >
            <h4 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h4>
            <div className="w-full h-48">
              <ScatterChart
                data={item.data}
                width={400}
                height={200}
                showAxes={false}
                showTrendLine={item.title !== 'Zero'}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
