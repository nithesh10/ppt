import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function Slide12_Closing() {
  const particles = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    })), []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -20, -10, -30, 0],
            x: [0, 10, -5, 15, 0],
            opacity: [0.1, 0.25, 0.1, 0.25, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="text-center z-10">
        {/* Logo */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="border-2 border-cyan px-10 py-5 rounded-lg">
            <span className="text-cyan text-5xl font-bold tracking-[0.15em]">VALURA</span>
          </div>
        </motion.div>

        {/* Gold tagline */}
        <motion.p
          className="text-gold text-2xl md:text-3xl font-medium mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          That is Valura's peace of mind.
        </motion.p>

        {/* URL */}
        <motion.p
          className="text-text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          Learn more at valura.ai
        </motion.p>
      </div>
    </div>
  );
}
