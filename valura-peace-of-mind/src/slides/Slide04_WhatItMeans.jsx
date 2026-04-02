import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide04_WhatItMeans({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 1); }, [registerPhases, slideIndex]);

  // phase 0: First paragraph
  // phase 1: Second paragraph with Government of India highlight

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="max-w-4xl text-center">
        <motion.p
          className="text-2xl md:text-3xl text-text-muted leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          You are not dealing with some offshore platform operating out of a jurisdiction you can't reach.
        </motion.p>

        {phase >= 1 && (
          <motion.p
            className="text-2xl md:text-3xl leading-relaxed mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-success">You are dealing with a company that the </span>
            <span className="text-gold font-bold shimmer-gold">Government of India</span>
            <span className="text-success"> has tested, verified, and permitted to operate.</span>
          </motion.p>
        )}
      </div>
    </div>
  );
}
