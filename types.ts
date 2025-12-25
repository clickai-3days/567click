import { ReactNode } from 'react';

export interface CurriculumDay {
  date: string;
  title: string;
  bullets: string[];
  outcome: string;
}

export interface BonusItem {
  title: string;
  value: string;
  icon: ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  metric: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}