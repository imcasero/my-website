export const variants = (delay: number) => {
  return {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
  };
};
