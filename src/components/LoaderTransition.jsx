import { motion } from "framer-motion";

const LoaderTransition = ({ pageName }) => (
  <motion.div
    className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center"
    initial={{ y: 0 }}
    animate={{ y: "-100%" }}
    exit={{ y: 0 }}
    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
  >
    <motion.h1
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.4 }}
      className="text-3xl font-bold text-black"
    >
      {pageName}
    </motion.h1>
  </motion.div>
);

export default LoaderTransition;
