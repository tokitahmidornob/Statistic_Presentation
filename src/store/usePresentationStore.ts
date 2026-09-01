import { create } from 'zustand';

interface PresentationState {
  currentSection: number;
  totalSections: number;
  setCurrentSection: (index: number) => void;
}

export const usePresentationStore = create<PresentationState>((set) => ({
  currentSection: 1,
  totalSections: 52,
  setCurrentSection: (index) => set({ currentSection: index }),
}));
