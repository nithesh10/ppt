import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide04_WhatItMeans({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  // phase 0: The problem — offshore platforms (left side, red tinted)
  // phase 1: The answer — inside India, triple punch (right side, green)
  // phase 2: Government of India seal line

  return (
    <div className="w-full h-full flex items-center justify-center px-16 pt-14">
      <div className="max-w-4xl w-full">
        {/* Two-column layout */}
        <div className="grid grid-cols-2 gap-6 items-center">

          {/* LEFT: The problem */}
          <motion.div
            className="bg-white rounded-2xl border border-danger/15 p-8 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Red accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-danger/60 rounded-l-2xl" />

            {/* Danger icon */}
            <div className="mb-5">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="#E24B4A" strokeWidth="2" fill="#E24B4A10" />
                <path d="M20 12V22" stroke="#E24B4A" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="27" r="1.5" fill="#E24B4A" />
              </svg>
            </div>

            <div className="text-xs font-semibold uppercase tracking-[0.15em] text-danger mb-3">
              The problem
            </div>
            <p className="text-text-secondary text-lg leading-relaxed">
              Most platforms take your client's money{' '}
              <span className="text-danger font-semibold">outside India</span> — into
              jurisdictions you can't reach, courts you can't access, and tax systems
              that work <span className="text-danger font-semibold">against</span> your client.
            </p>
          </motion.div>

          {/* RIGHT: The answer (appears on tap) */}
          {phase >= 1 ? (
            <motion.div
              className="bg-white rounded-2xl border border-success/20 p-8 shadow-sm relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Green accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-success rounded-l-2xl" />

              {/* Shield icon */}
              <div className="mb-5">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L6 10V20C6 28.5 12 35.5 20 38C28 35.5 34 28.5 34 20V10L20 4Z"
                    stroke="#2E7D32" strokeWidth="2" fill="#2E7D3210" />
                  <path d="M14 20L18 24L26 16" stroke="#2E7D32" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-success mb-3">
                With Valura
              </div>

              <div className="space-y-3">
                {['Built inside India', 'Regulated inside India', 'Your money stays inside India'].map((line, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.35 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-success text-sm">&#10003;</span>
                    </div>
                    <span className="text-text-primary text-lg font-semibold">{line}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div /> // Empty placeholder
          )}
        </div>

        {/* Government of India seal (phase 2) */}
        {phase >= 2 && (
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 bg-gold/5 border border-gold/25 rounded-full px-6 py-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M8 12L11 15L16 9" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-text-secondary text-base">
                Tested, verified, and permitted to operate by the{' '}
                <span className="text-gold font-bold">Government of India</span>
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
