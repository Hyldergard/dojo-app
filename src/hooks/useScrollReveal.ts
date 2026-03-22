/**
 * useScrollReveal Hook
 * 
 * Custom hook untuk animasi reveal saat element masuk viewport
 * Menggunakan Intersection Observer API
 */

import { useState, useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook untuk animasi scroll reveal
 * @param options - Konfigurasi Intersection Observer
 * @returns ref untuk element dan isVisible status
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseScrollRevealOptions = {}): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

export default useScrollReveal;
