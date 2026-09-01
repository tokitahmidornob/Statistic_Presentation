'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { acts } from '@/lib/acts';
import { motion } from 'framer-motion';

export function Section03() {
  const scrollToSection = (sectionNum: number) => {
    const el = document.getElementById(`section-${sectionNum}`);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Slide sectionNum={3} title="Table of Contents">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {acts.map((act, index) => (
          <motion.div
            key={act.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => scrollToSection(act.start)}
            className="group cursor-pointer p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-${act.color}`} />
            
            <div className={`text-xs font-bold uppercase tracking-wider text-${act.color} mb-2`}>
              Act {index + 1}
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
              {act.title}
            </h3>
            
            <div className="mt-auto pt-4 text-sm text-neutral-400 flex justify-between items-center">
              <span>Sections {act.start} – {act.end}</span>
              <span className={`text-${act.color} opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300`}>
                Jump →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
