export const routeVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6
    }
  },
  firstRenderHidden: {
    opacity: 0,
    y: "-5%"
  },
  firstRenderVisible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.7
    }
  },
  exit: { opacity: 0, transition: { ease: "easeInOut", duration: 0.4 } }
};

export const childVariants = {
  firstRenderHidden: {
    opacity: 0,
    y: "-300%"
  },
  firstRenderVisible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: [0.5, 1.35, 0.45, 1.05]
      // ease: [0.34, 1.56, 0.64, 1]
    }
  }
};
