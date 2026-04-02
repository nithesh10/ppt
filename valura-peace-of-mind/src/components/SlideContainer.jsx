import { motion } from 'framer-motion';

export default function SlideContainer({ children, slideKey }) {
  return (
    <motion.div
      key={slideKey}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{
        enter: { duration: 0.5, ease: 'easeOut' },
        exit: { duration: 0.3, ease: 'easeIn' },
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
}
