'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePresentationStore } from '@/store/usePresentationStore';
import { getActForSection } from '@/lib/acts';

gsap.registerPlugin(ScrollTrigger);

interface SlideProps {
  sectionNum: number;
  title: string;
  children?: React.ReactNode;
}

export function Slide({ sectionNum, title, children }: SlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);
  const setCurrentSection = usePresentationStore((state) => state.setCurrentSection);
  const act = getActForSection(sectionNum);

  useEffect(() => {
    if (!slideRef.current) return;

    const st = ScrollTrigger.create({
      trigger: slideRef.current,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () => setCurrentSection(sectionNum),
      onEnterBack: () => setCurrentSection(sectionNum),
    });

    return () => {
      st.kill();
    };
  }, [sectionNum, setCurrentSection]);

  return (
    <section
      id={`section-${sectionNum}`}
      ref={slideRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 px-8 lg:px-24 snap-start"
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl">
          {act && (
            <div className={`text-sm font-semibold tracking-wider uppercase text-${act.color}`}>
              {act.title}
            </div>
          )}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 tracking-tight text-balance">
            {title}
          </h2>
        </div>

        {/* Section Content */}
        <div className="w-full relative min-h-[400px] flex flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
