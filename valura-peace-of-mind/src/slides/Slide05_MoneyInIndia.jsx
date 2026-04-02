import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { indiaMapPath, giftCityPosition } from '../utils/indiaMapPath';

export default function Slide05_MoneyInIndia() {
  const [mapDrawn, setMapDrawn] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setMapDrawn(true), 100);
    const t2 = setTimeout(() => setShowPin(true), 1800);
    const t3 = setTimeout(() => setShowCard(true), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12">
      {/* Map */}
      <div className="relative" style={{ width: 500, height: 460 }}>
        <svg viewBox="80 20 380 500" width="500" height="460">
          <motion.path
            d={indiaMapPath}
            stroke="#4EA8DE"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={mapDrawn ? { pathLength: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          {/* Filled after draw */}
          <motion.path
            d={indiaMapPath}
            stroke="none"
            fill="#4EA8DE"
            initial={{ opacity: 0 }}
            animate={mapDrawn ? { opacity: 0.08 } : {}}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
        </svg>

        {/* GIFT City Pin */}
        {showPin && (
          <div className="absolute" style={{ left: giftCityPosition.x - 40, top: giftCityPosition.y - 40 }}>
            {/* Pulse rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-10 h-10 rounded-full border border-success"
                style={{ left: 10, top: 10 }}
                initial={{ scale: 0.5, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ delay: i * 0.4, duration: 1.5, repeat: Infinity }}
              />
            ))}
            {/* Pin */}
            <motion.div
              className="absolute w-5 h-5 bg-success rounded-full"
              style={{ left: 20, top: 20, boxShadow: '0 0 10px #4CAF50' }}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            />
            {/* Label */}
            <motion.div
              className="absolute text-success text-sm font-medium whitespace-nowrap"
              style={{ left: 50, top: 16 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              GIFT City, Ahmedabad
            </motion.div>
          </div>
        )}
      </div>

      {/* HDFC Card */}
      <motion.div
        className="mt-4 bg-navy border border-cyan/30 rounded-lg p-6 text-center"
        style={{ minWidth: 300 }}
        initial={{ opacity: 0, y: 40 }}
        animate={showCard ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-cyan font-bold text-lg mb-3">HDFC BANK</div>
        <div className="flex gap-8 justify-center text-text-secondary text-sm">
          <div>Cash custody <span className="text-success">&#10003;</span></div>
          <div>Asset custody <span className="text-success">&#10003;</span></div>
        </div>
        <div className="text-text-muted text-xs mt-2">In your client's name</div>
      </motion.div>
    </div>
  );
}
