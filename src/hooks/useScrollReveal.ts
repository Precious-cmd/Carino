import { useEffect } from 'react';

export const useScrollReveal = (ref: React.RefObject<HTMLElement>, options?: IntersectionObserverInit) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);
};
