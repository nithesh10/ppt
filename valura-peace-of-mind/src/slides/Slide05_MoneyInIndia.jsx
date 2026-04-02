import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { indiaMapPath, giftCityPosition } from '../utils/indiaMapPath';

export default function Slide05_MoneyInIndia({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  // phase 0: Heading + Map draws
  // phase 1: GIFT City pin drops
  // phase 2: HDFC card slides up

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Custody inside India
      </motion.h2>

      <div className="relative" style={{ width: 420, height: 400 }}>
        <svg viewBox="80 20 380 500" width="420" height="400">
          <motion.path
            d={indiaMapPath}
            stroke="#2E7D32"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.path
            d={indiaMapPath}
            stroke="none"
            fill="#2E7D32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
        </svg>

        {/* GIFT City Pin */}
        {phase >= 1 && (
          <div className="absolute" style={{ left: giftCityPosition.x - 30, top: giftCityPosition.y - 30 }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 rounded-full border border-success"
                style={{ left: 8, top: 8 }}
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ delay: i * 0.4, duration: 1.5, repeat: Infinity }}
              />
            ))}
            <motion.div
              className="absolute w-4 h-4 bg-success rounded-full"
              style={{ left: 16, top: 16, boxShadow: '0 0 10px #4CAF50' }}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            <motion.div
              className="absolute text-success text-sm font-semibold whitespace-nowrap"
              style={{ left: 40, top: 10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              GIFT City, Ahmedabad
            </motion.div>
          </div>
        )}
      </div>

      {/* HDFC Card */}
      {phase >= 2 && (
        <motion.div
          className="mt-2 bg-white border border-border rounded-lg p-5 text-center shadow-md"
          style={{ minWidth: 300 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-success font-bold text-lg mb-2">HDFC BANK</div>
          <div className="flex gap-8 justify-center text-text-secondary text-sm">
            <div>Cash custody <span className="text-success">&#10003;</span></div>
            <div>Asset custody <span className="text-success">&#10003;</span></div>
          </div>
          <div className="text-text-muted text-xs mt-2">In your client's name</div>
        </motion.div>
      )}
    </div>
  );
}
