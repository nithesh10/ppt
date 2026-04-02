import { motion } from 'framer-motion';
import { useEffect } from 'react';

const line1 = 'Everything we just showed you — the marketplace, the intelligence, the access —';
const highlight = 'none of it matters';
const line1End = "if you can't trust the platform behind it.";
const fullText = `${line1} ${highlight} ${line1End}`;

export default function Slide02_TrustTransition({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 1); }, [registerPhases, slideIndex]);

  // phase 0: Main sentence
  // phase 1: Second line

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="max-w-4xl text-center">
        <motion.p
          className="text-2xl md:text-3xl leading-relaxed text-text-muted"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {line1}{' '}
          <span className="text-text-primary font-bold">{highlight}</span>{' '}
          {line1End}
        </motion.p>

        {phase >= 1 && (
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mt-16"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            So let us give you the peace of mind you need.
          </motion.p>
        )}
      </div>
    </div>
  );
}
