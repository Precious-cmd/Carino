import Lenis from '@studio-freight/lenis';

let lenis: Lenis | null = null;

export const createSmoothScroll = () => {
  if (typeof window === 'undefined') return null;

  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    const raf = (time: number) => {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }

  return lenis;
};
