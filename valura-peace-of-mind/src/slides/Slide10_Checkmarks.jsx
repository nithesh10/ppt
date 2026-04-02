import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const items = [
  { title: 'KYC & Onboarding', value: '5 minutes' },
  { title: 'LRS Remittance', value: 'Within hours' },
  { title: 'Tax Certificate', value: '7 days' },
];

function CheckmarkSVG({ delay }) {
  return (
    <motion.svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto mb-2">
      <motion.path
        d="M15 32L25 42L45 20"
        stroke="#4CAF50"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      />
    </motion.svg>
  );
}

export default function Slide10_Checkmarks() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 gap-10">
      <div className="flex gap-8 w-full max-w-4xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-navy border border-success/30 rounded-xl p-6 text-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.2, duration: 0.4 }}
          >
            {/* Green ripple */}
            <motion.div
              className="absolute inset-0 bg-success/10 rounded-xl"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5], opacity: [0.3, 0] }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            />

            <div className="text-text-secondary text-sm mb-2">{item.title}</div>
            <div className="text-success text-2xl font-bold mb-4">{item.value}</div>
            <CheckmarkSVG delay={0.3 + i * 0.2} />
            <motion.div
              className="text-success text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.2 }}
            >
              DONE
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-2xl md:text-3xl text-gold font-medium"
        initial={{ opacity: 0 }}
        animate={showFooter ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        That is Valura's peace of mind.
      </motion.p>
    </div>
  );
}
