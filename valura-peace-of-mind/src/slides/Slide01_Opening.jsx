import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide01_Opening({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 1); }, [registerPhases, slideIndex]);

  // phase 0: Logo appears
  // phase 1: "PEACE OF MIND" subtitle + line

  return (
    <div className="w-full h-full flex items-center justify-center relative px-20">
      <div className="text-center">
        {/* Valura Logo image */}
        <motion.div
          className="inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/valura-logo.jpg"
            alt="Valura"
            className="w-32 h-32 rounded-2xl shadow-lg mx-auto"
          />
        </motion.div>

        {/* VALURA text */}
        <motion.h1
          className="text-6xl md:text-7xl font-bold text-success tracking-[0.15em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          VALURA
        </motion.h1>

        {/* Line + subtitle on tap */}
        {phase >= 1 && (
          <>
            <motion.div
              className="mx-auto mt-8 h-[1px] bg-success"
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            <motion.p
              className="text-text-secondary text-lg tracking-[0.3em] uppercase mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Peace of Mind
            </motion.p>
          </>
        )}
      </div>
    </div>
  );
}
