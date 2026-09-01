'use client';

import React from 'react';
import { Slide } from '@/components/layout/Slide';

export function Section02() {
  return (
    <Slide sectionNum={2} title="The Investigators">
      <div className="w-full max-w-4xl mx-auto">
        <div className="w-full overflow-hidden rounded-xl border border-neutral-200 shadow-sm bg-white mt-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-neutral-50 text-neutral-600 border-b border-neutral-200 font-semibold">
              <tr>
                <th className="px-6 py-4">SL</th>
                <th className="px-6 py-4">Student ID#</th>
                <th className="px-6 py-4">Name of Students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4">9</td>
                <td className="px-6 py-4 font-mono">23303345</td>
                <td className="px-6 py-4">Saidul Islam</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4">14</td>
                <td className="px-6 py-4 font-mono">24207054</td>
                <td className="px-6 py-4 font-bold text-neutral-800">Toki Tahmid</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4">20</td>
                <td className="px-6 py-4 font-mono">25102004</td>
                <td className="px-6 py-4">Resmi Akter Reya</td>
              </tr>
              <tr className="hover:bg-neutral-50 transition-colors">
                <td className="px-6 py-4">21</td>
                <td className="px-6 py-4 font-mono">25102005</td>
                <td className="px-6 py-4">Shanjida Jannat Sheme</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Slide>
  );
}
