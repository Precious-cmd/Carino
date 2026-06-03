export const animation = {
  duration: {
    fastest: '150ms',
    fast: '250ms',
    base: '360ms',
    slow: '520ms',
    longest: '900ms'
  },
  easing: {
    standard: 'cubic-bezier(0.22, 1, 0.36, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.2, 1)',
    soft: 'cubic-bezier(0.35, 0.8, 0.4, 1)',
    bounce: 'cubic-bezier(0.22, 1, 0.36, 1.1)'
  },
  transition: {
    button: 'background-color 250ms cubic-bezier(0.22, 1, 0.36, 1), transform 250ms cubic-bezier(0.22, 1, 0.36, 1)',
    card: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 320ms ease'
  }
};
