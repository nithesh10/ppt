import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide07_EstateTax({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 3); }, [registerPhases, slideIndex]);

  // phase 0: Title + full green bar
  // phase 1: Bar splits — 60% green, 40% red slides away
  // phase 2: "40% GONE" text
  // phase 3: GIFT City banner

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 gap-8">
      <motion.p
        className="text-xl text-text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your client invests <span className="text-text-primary font-bold">&#x20B9;1 Crore</span> in US markets
      </motion.p>

      <div className="relative w-full max-w-3xl h-20">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-lg flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: '#4CAF50' }}
          initial={{ width: '0%' }}
          animate={{ width: phase >= 1 ? '58%' : '100%' }}
          transition={phase >= 1 ? { duration: 0.5 } : { duration: 0.8 }}
        >
          <span>{phase >= 1 ? '₹60,00,000 — Family receives 60%' : '₹1,00,00,000 — 100%'}</span>
        </motion.div>

        {phase >= 1 && (
          <>
            <motion.div
              className="absolute top-0 h-full w-[2px] bg-text-primary z-10"
              style={{ left: '58%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6] }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 h-full rounded-r-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ left: '58%', width: '42%', backgroundColor: '#E24B4A' }}
              initial={{ x: 0, rotate: 0, opacity: 1 }}
              animate={{ x: 120, rotate: 3, opacity: 0.7 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              ₹40,00,000 — US Govt (40%)
            </motion.div>
          </>
        )}
      </div>

      {phase >= 2 && (
        <motion.div
          className="text-danger text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, x: [0, -5, 5, -3, 3, 0] }}
          transition={{ duration: 0.5 }}
        >
          40% GONE.
        </motion.div>
      )}

      {phase >= 3 && (
        <motion.div
          className="bg-success/5 border border-success/30 rounded-lg px-8 py-4 text-center shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        >
          <span className="text-success text-xl font-bold">GIFT City — 0% Estate Tax.</span>
          <span className="text-text-primary text-xl ml-2">Family receives 100%.</span>
        </motion.div>
      )}
    </div>
  );
}
