import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const line1Words = 'Everything we just showed you — the marketplace, the intelligence, the access —'.split(' ');
const highlightWords = 'none of it matters'.split(' ');
const line1End = "if you can't trust the platform behind it.".split(' ');
const allWords = [...line1Words, ...highlightWords, ...line1End];
const highlightStart = line1Words.length;
const highlightEnd = highlightStart + highlightWords.length;

export default function Slide02_TrustTransition() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSecondLine(true), allWords.length * 80 + 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center px-12">
      <div className="max-w-4xl text-center">
        <p className="text-2xl md:text-3xl leading-relaxed">
          {allWords.map((word, i) => {
            const isHighlight = i >= highlightStart && i < highlightEnd;
            return (
              <motion.span
                key={i}
                className={`inline-block ${isHighlight ? 'text-text-primary font-bold' : 'text-text-muted'}`}
                style={{ marginRight: '0.5em' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                {isHighlight ? (
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ delay: highlightStart * 0.08 + 0.3, duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ) : word}
              </motion.span>
            );
          })}
        </p>

        <motion.p
          className="text-xl md:text-2xl text-text-secondary mt-10"
          initial={{ opacity: 0, y: 15 }}
          animate={showSecondLine ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          So let us give you the peace of mind you need.
        </motion.p>
      </div>
    </div>
  );
}
