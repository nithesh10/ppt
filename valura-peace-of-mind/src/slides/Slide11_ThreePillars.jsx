import { motion } from 'framer-motion';
import { useEffect } from 'react';

const pillars = [
  { num: '1', title: 'Licensed', lines: ['IFSCA + SEBI', 'Govt. of India'] },
  { num: '2', title: 'Money in India', lines: ['HDFC GIFT City', 'No estate tax'] },
  { num: '3', title: 'Fully Digital', lines: ['KYC · LRS · Tax', 'Zero paperwork'] },
];

export default function Slide11_ThreePillars({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  // phase 0: Title + pillars rise
  // phase 1: Checkmarks + green borders
  // phase 2: Footer text

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 gap-8">
      <motion.h2
        className="text-gold text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Peace of Mind
      </motion.h2>

      <div className="flex gap-6 w-full max-w-4xl justify-center">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            className="w-56 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5, type: 'spring', stiffness: 80 }}
          >
            <motion.div
              className="h-[280px] border-2 rounded-lg p-6 flex flex-col items-center justify-between bg-white shadow-sm"
              animate={{ borderColor: phase >= 1 ? '#4CAF50' : '#C9A84C' }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <div className="text-gold text-4xl font-bold mb-3">{p.num}</div>
                <div className="text-text-primary text-xl font-bold mb-4">{p.title}</div>
                {p.lines.map((line, j) => (
                  <div key={j} className="text-text-muted text-sm">{line}</div>
                ))}
              </div>

              {phase >= 1 && (
                <motion.div
                  className="text-success text-3xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1, type: 'spring' }}
                >
                  &#10003;
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {phase >= 2 && (
        <motion.p
          className="text-text-secondary text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your clients are safe. Your business is protected.
        </motion.p>
      )}
    </div>
  );
}
