import { motion } from 'framer-motion';

export default function SlideIndicator({ current, total }) {
  return (
    <div className="fixed bottom-6 right-6 flex gap-2 z-50">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full cursor-pointer"
          animate={{
            backgroundColor: i === current ? '#4EA8DE' : '#5A8BB0',
            scale: i === current ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}
