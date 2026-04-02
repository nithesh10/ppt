import { motion } from 'framer-motion';
import { useEffect } from 'react';

const items = [
  { title: 'KYC & Onboarding', value: '5 minutes' },
  { title: 'LRS Remittance', value: 'Within hours' },
  { title: 'Tax Certificate', value: '7 days' },
];

function CheckmarkSVG() {
  return (
    <motion.svg width="56" height="56" viewBox="0 0 60 60" className="mx-auto mb-2">
      <motion.path
        d="M15 32L25 42L45 20"
        stroke="#4CAF50"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    </motion.svg>
  );
}

export default function Slide10_Checkmarks({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 1); }, [registerPhases, slideIndex]);

  // phase 0: Cards with checkmarks
  // phase 1: "That is Valura's peace of mind."

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 gap-10">
      <div className="flex gap-6 w-full max-w-4xl">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-white border border-success/30 rounded-xl p-6 text-center relative overflow-hidden shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
          >
            <div className="text-text-secondary text-sm mb-2">{item.title}</div>
            <div className="text-success text-2xl font-bold mb-4">{item.value}</div>
            <CheckmarkSVG />
            <motion.div
              className="text-success text-sm font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15 }}
            >
              DONE
            </motion.div>
          </motion.div>
        ))}
      </div>

      {phase >= 1 && (
        <motion.p
          className="text-2xl md:text-3xl text-gold font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          That is Valura's peace of mind.
        </motion.p>
      )}
    </div>
  );
}
