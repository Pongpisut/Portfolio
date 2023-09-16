export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const arrowCardItem = () => {
  return {
    offscreen: {
      x: 140,
    },
    onscreen: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
};

export const imgCardItem = () => {
  return {
    offscreen: {
      scale: 1.1,
      x: 20,
    },
    onscreen: {
      scale: 1,
      x: 0,
      transformOrigin: "center center",
      transition: {
        duration: 1,
      },
    },
  };
};

export const scaleCardItem = () => {
  return {
    offscreen: {
      y: -120,
      scale: 0.9,
      z: -1,
      x: 0,
      opacity: 1,
      position: "relative",
      zIndex: -1,
      filter: "contrast(60%) brightness(30%) ",
      transformOrigin: "center 0%",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      z: 0,
      scale: 1,
      opacity: 1,
      zIndex: 20,
      filter: "contrast(100%) brightness(100%) ",
      transformOrigin: "top 0%",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.6,
      },
    },
  };
};

export const cardTapProfilio = () => {
  return {
    initial: {
      background: "linear-gradient(136deg, rgb(51, 51, 51) 0%, rgb(34, 34, 34) 100%)",
      transition: {
        duration: 0.5,
      },
    },
    whileHover: {
      scale: 0.99,
      transition: {
        duration: 1.2,
        ease: [0, 0.71, 0.2, 1.01],
        background: {
          type: "spring",
          damping: 20,
          stiffness: 80,
          restDelta: 0.001,
          repeat: Infinity,
        },
      },
    },
    whileTap: {
      scale: 1.03,
      transition: {
        duration: 0.5,
      },
    },
  };
};
