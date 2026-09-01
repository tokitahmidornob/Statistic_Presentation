/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Column {
  key: string;
  header: React.ReactNode;
  visibleStep: number;
  color?: string;
}

interface AnimatedTableProps {
  data: any[];
  columns: Column[];
  currentStep: number;
  highlightedCols?: string[];
  showTotals?: boolean;
  totals?: any;
}

export function AnimatedTable({ data, columns, currentStep, highlightedCols = [], showTotals = false, totals }: AnimatedTableProps) {
  const safeData = (data || []).filter(row => row != null);
  const visibleColumns = (columns || []).filter(col => col != null && currentStep >= col.visibleStep);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-white">
      <table className="w-full text-sm text-left">
        <thead className="bg-neutral-50 text-neutral-600 border-b border-neutral-200">
          <tr>
            {visibleColumns.map(col => (
              <th 
                key={col.key} 
                className={`px-6 py-4 font-semibold ${highlightedCols.includes(col.key) ? `text-${col.color || 'primary'} bg-${col.color || 'primary'}-light` : ''}`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {!showTotals && safeData.map((row, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: currentStep === 1 ? i * 0.1 : 0 }}
                className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
              >
                {visibleColumns.map(col => (
                  <td 
                    key={col.key} 
                    className={`px-6 py-3 ${highlightedCols.includes(col.key) ? 'font-medium bg-neutral-50' : ''}`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
            
            {showTotals && totals && (
              <motion.tr
                initial={{ opacity: 0, backgroundColor: '#fff' }}
                animate={{ opacity: 1, backgroundColor: '#f0fdfa' }}
                transition={{ duration: 0.8 }}
                className="border-t-2 border-secondary font-bold text-lg"
              >
                {visibleColumns.map((col, i) => (
                  <td key={col.key} className="px-6 py-4 text-secondary">
                    {i === 0 ? 'Σ' : totals[col.key]}
                  </td>
                ))}
              </motion.tr>
            )}
          </AnimatePresence>
        </tbody>
      </table>
    </div>
  );
}
