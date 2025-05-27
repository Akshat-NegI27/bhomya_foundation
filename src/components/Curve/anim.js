// anim.js

export const text = {
  initial: { opacity: 0, y: 40 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

export const translate = {
  initial: {
    top: "0px",
  },
  enter: {
    top: "-100vh",
    transition: { duration: 3, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-600px",
    transition: { duration: 3, delay: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const curve = (initialPath, targetPath) => ({
  initial: { d: initialPath },
  enter: {
    d: targetPath,
    transition: { duration: 3, delay: 1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: initialPath,
    transition: { duration: 3, ease: [0.76, 0, 0.24, 1] },
  },
});
