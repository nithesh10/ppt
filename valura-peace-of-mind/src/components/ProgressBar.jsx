import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-border z-50">
      <motion.div
        className="h-full bg-cyan"
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </div>
  );
}
