'use client';

import React, { useEffect } from 'react';
import { usePresentationStore } from '@/store/usePresentationStore';
import { getActForSection } from '@/lib/acts';

export function PresentationShell({ children }: { children?: React.ReactNode }) {
  const { currentSection, totalSections } = usePresentationStore();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        if (currentSection < totalSections) {
          const nextSection = document.getElementById(`section-${currentSection + 1}`);
          nextSection?.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 1) {
          const prevSection = document.getElementById(`section-${currentSection - 1}`);
          prevSection?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, totalSections]);

  const act = getActForSection(currentSection);

  return (
    <div className="relative min-h-screen w-full bg-background flex flex-col">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-neutral-900 tracking-tight">
            The Mathematics of Connection
          </h1>
          {act && (
            <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${act.color}-light text-${act.color}`}>
              {act.title}
            </span>
          )}
        </div>
        <div className="text-sm font-medium text-neutral-600">
          {currentSection} / {totalSections}
        </div>
      </header>

      {/* Side Progress Rail */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 w-12 z-50 flex flex-col items-center space-y-1.5 py-4 pl-2">
        {Array.from({ length: totalSections }).map((_, i) => {
          const sectionNum = i + 1;
          const isActive = sectionNum === currentSection;
          const sectionAct = getActForSection(sectionNum);
          
          return (
            <button
              key={sectionNum}
              onClick={() => {
                const el = document.getElementById(`section-${sectionNum}`);
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? `bg-${sectionAct?.color || 'primary'} scale-150`
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              title={`Section ${sectionNum}: ${sectionAct?.title}`}
              aria-label={`Go to section ${sectionNum}`}
            />
          );
        })}
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full relative">
        {children}
      </main>
    </div>
  );
}
