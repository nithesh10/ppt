import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide04_WhatItMeans() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowSecond(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center px-12">
      <div className="max-w-4xl text-center">
        <motion.p
          className="text-2xl md:text-3xl text-text-muted leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          You are not dealing with some offshore platform operating out of a jurisdiction you can't reach.
        </motion.p>

        <motion.p
          className="text-2xl md:text-3xl leading-relaxed mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={showSecond ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-success">You are dealing with a company that the </span>
          <span className="text-gold font-bold shimmer-gold">Government of India</span>
          <span className="text-success"> has tested, verified, and permitted to operate.</span>
        </motion.p>
      </div>
    </div>
  );
}
