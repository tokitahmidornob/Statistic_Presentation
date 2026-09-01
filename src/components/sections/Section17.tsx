'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';
import { motion } from 'framer-motion';

export function Section17() {
  return (
    <Slide sectionNum={17} title="The Need for Measurement">
      <div className="w-full flex flex-col items-center justify-center relative min-h-[500px]">
        
        {/* Background Grid that sharpens */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 0.1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwVjQwIiBzdHJva2U9IiMxRjRGRkYiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl text-neutral-600 text-center max-w-3xl mb-12 z-10"
        >
          Visuals give us a hint, but science demands precision. We need a way to quantify exactly how strong this invisible bond is.
        </motion.p>

        {/* Floating Math Symbols */}
        <div className="relative w-full max-w-2xl h-64 z-10 flex justify-around items-center">
          {['\\Sigma', 'r', '\\bar{x}', 's_y', '\\beta'].map((symbol, i) => (
            <motion.div
              key={symbol}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-neutral-800 font-bold drop-shadow-sm select-none"
            >
              {/* Simplistic render, could use KaTeX here but for isolated symbols text is fine if font-serif */}
              <span dangerouslySetInnerHTML={{ __html: `\\( ${symbol} \\)`.replace('\\(', '').replace('\\)', '').replace('\\Sigma', '&Sigma;').replace('\\bar{x}', 'x&#772;').replace('s_y', 's<sub>y</sub>').replace('\\beta', '&beta;') }} />
            </motion.div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
