import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function Slide08_Verdict({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  // phase 0: First line
  // phase 1: Second line
  // phase 2: Disclaimer

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="max-w-3xl text-center space-y-6">
        <motion.p
          className="text-2xl md:text-3xl font-medium leading-relaxed text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          No estate tax. Indian jurisdiction. Indian dispute resolution.
        </motion.p>

        {phase >= 1 && (
          <motion.p
            className="text-2xl md:text-3xl font-medium leading-relaxed text-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your client's money is protected by the Indian legal system.
          </motion.p>
        )}

        {phase >= 2 && (
          <motion.p
            className="text-text-muted text-lg italic mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Please do your own research on this — it is important.
          </motion.p>
        )}
      </div>
    </div>
  );
}
