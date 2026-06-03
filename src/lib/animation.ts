export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  },
  stagger: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }
};
