import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

function CountUp({ target, suffix = '', delay = 0 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 1.2,
      delay,
      ease: 'easeOut',
    });
    const unsub = rounded.on('change', (v) => setDisplay(v));
    return () => { controls.stop(); unsub(); };
  }, [target, delay]);

  return <>{display}{suffix}</>;
}

const cards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#4EA8DE" strokeWidth="2" />
        <path d="M24 10 C24 10 18 18 18 24 C18 30 24 38 24 38" stroke="#4EA8DE" strokeWidth="1.5" fill="none" />
        <path d="M24 10 C24 10 30 18 30 24 C30 30 24 38 24 38" stroke="#4EA8DE" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="10" stroke="#4EA8DE" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'KYC & Onboarding',
    value: 5,
    suffix: ' minutes',
    subtitle: 'Completely digital',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M14 28L24 18L34 28" stroke="#4EA8DE" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 18V38" stroke="#4EA8DE" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="10" width="28" height="28" rx="4" stroke="#4EA8DE" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: 'LRS Remittance',
    valueText: 'Within hours',
    subtitle: 'Money in USD account',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="8" width="24" height="32" rx="3" stroke="#4EA8DE" strokeWidth="2" fill="none" />
        <path d="M18 22L22 26L30 18" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="32" x2="30" y2="32" stroke="#4EA8DE" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Tax Certificate',
    value: 7,
    suffix: ' days',
    subtitle: 'No CA, no spreadsheets',
  },
];

export default function Slide09_DigitalJourney() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 gap-10">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        100% Digital Journey
      </motion.h2>

      <div className="flex gap-8 w-full max-w-4xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-navy border border-cyan/20 rounded-xl p-6 text-center hover:border-cyan/50 transition-colors"
            style={{ boxShadow: '0 0 20px rgba(78,168,222,0.05)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.3, duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <div className="text-text-secondary text-sm mb-3">{card.title}</div>
            <div className="text-success text-3xl font-bold mb-2">
              {card.valueText || <CountUp target={card.value} suffix={card.suffix} delay={0.5 + i * 0.3} />}
            </div>
            <div className="text-text-muted text-xs">{card.subtitle}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-4xl h-1 bg-text-muted/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-cyan rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.3, duration: 1.8, ease: 'easeOut' }}
        />
      </div>

      <motion.p
        className="text-xl text-text-primary font-medium"
        initial={{ opacity: 0 }}
        animate={showFooter ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        No paperwork. No office visits. No spreadsheets.
      </motion.p>
    </div>
  );
}
