export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.25 },
  },
  exit: { opacity: 0, y: 300, transition: { duration: 0.5 } },
};

export const titleAnimated = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};
