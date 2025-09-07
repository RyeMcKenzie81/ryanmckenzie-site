'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold }
    );

    const element = ref.current;
    if (element) {
      element.classList.add(`scroll-${animation}`);
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animation, delay, threshold]);

  return <div ref={ref}>{children}</div>;
}