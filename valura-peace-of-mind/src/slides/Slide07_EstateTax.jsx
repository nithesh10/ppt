import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide07_EstateTax() {
  const [split, setSplit] = useState(false);
  const [showGone, setShowGone] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSplit(true), 1800);
    const t2 = setTimeout(() => setShowGone(true), 2800);
    const t3 = setTimeout(() => setShowBanner(true), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 gap-8">
      {/* Header */}
      <motion.p
        className="text-xl text-text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Your client invests <span className="text-text-primary font-bold">&#x20B9;1 Crore</span> in US markets
      </motion.p>

      {/* The Bar */}
      <div className="relative w-full max-w-3xl h-20">
        {/* Green portion */}
        <motion.div
          className="absolute top-0 left-0 h-full rounded-lg flex items-center justify-center text-text-primary font-bold"
          style={{ backgroundColor: '#4CAF50' }}
          initial={{ width: '0%' }}
          animate={{ width: split ? '58%' : '100%' }}
          transition={split ? { duration: 0.5 } : { duration: 0.8, delay: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            {split ? '₹60,00,000 — Family receives 60%' : '₹1,00,00,000 — 100%'}
          </motion.span>
        </motion.div>

        {/* Red portion - only after split */}
        {split && (
          <>
            {/* Crack line */}
            <motion.div
              className="absolute top-0 h-full w-[2px] bg-text-primary z-10"
              style={{ left: '58%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6] }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 h-full rounded-r-lg flex items-center justify-center text-text-primary font-bold text-sm"
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

      {/* 40% GONE */}
      <motion.div
        className="text-danger text-4xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={showGone ? {
          opacity: 1,
          scale: 1,
          x: [0, -5, 5, -3, 3, 0],
        } : {}}
        transition={{ duration: 0.5 }}
      >
        40% GONE.
      </motion.div>

      {/* GIFT City Banner */}
      <motion.div
        className="bg-success/10 border border-success/40 rounded-lg px-8 py-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={showBanner ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <span className="text-success text-xl font-bold">GIFT City — 0% Estate Tax.</span>
        <span className="text-text-primary text-xl ml-2">Family receives 100%.</span>
      </motion.div>
    </div>
  );
}
