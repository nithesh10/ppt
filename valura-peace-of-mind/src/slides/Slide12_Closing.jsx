import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';

export default function Slide12_Closing({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 1); }, [registerPhases, slideIndex]);

  // phase 0: Logo + VALURA + tagline
  // phase 1: CTA + URL

  const particles = useMemo(() =>
    Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 6 + Math.random() * 10,
      delay: Math.random() * 4,
    })), []);

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden px-20">
      {/* Subtle radial gradient bg */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(46,125,50,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-success"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, opacity: 0.08 }}
          animate={{
            y: [0, -15, -8, -22, 0],
            x: [0, 8, -4, 12, 0],
            opacity: [0.05, 0.12, 0.05, 0.12, 0.05],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="text-center z-10 max-w-2xl">
        {/* Logo */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="/valura-logo.jpg"
            alt="Valura"
            className="w-24 h-24 rounded-2xl shadow-xl mx-auto"
            style={{ boxShadow: '0 8px 32px rgba(46,125,50,0.2)' }}
          />
        </motion.div>

        {/* VALURA wordmark */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-success tracking-[0.15em] mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          VALURA
        </motion.h1>

        {/* Divider */}
        <motion.div
          className="mx-auto h-[1px] bg-success/30 mb-10"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />

        {/* Gold tagline */}
        <motion.p
          className="text-gold text-2xl md:text-3xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          That is Valura's peace of mind.
        </motion.p>

        {/* CTA section on tap */}
        {phase >= 1 && (
          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 bg-success/10 border border-success/25 rounded-full px-8 py-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-success font-medium text-sm">Start your journey today</span>
            </div>

            <motion.p
              className="text-text-muted text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Learn more at{' '}
              <span className="text-success font-medium">valura.ai</span>
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
