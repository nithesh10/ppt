import { motion } from 'framer-motion';
import { useEffect } from 'react';

function CertificateCard({ title, subtitle, visible, showStamp, stampDelay }) {
  if (!visible) return null;
  return (
    <motion.div
      className="w-52 h-72 rounded-lg border-2 border-gold bg-white p-5 flex flex-col items-center justify-between shadow-md relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="text-center">
        <div className="text-gold text-2xl font-bold tracking-wider">{title}</div>
        <div className="text-text-muted text-xs mt-2 leading-relaxed">{subtitle}</div>
      </div>
      <svg width="46" height="46" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="2" fill="none" />
        <circle cx="30" cy="30" r="22" stroke="#C9A84C" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        <text x="30" y="34" textAnchor="middle" fill="#C9A84C" fontSize="10" fontWeight="bold">SEAL</text>
      </svg>

      {/* Individual approved stamp on each card */}
      {showStamp && (
        <motion.div
          className="absolute -bottom-3 -right-3 z-10"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: [0, 1.15, 1], rotate: [-20, -10, -8] }}
          transition={{ delay: stampDelay || 0, duration: 0.45, ease: 'easeOut' }}
        >
          <div className="w-16 h-16 rounded-full border-[2.5px] border-success flex items-center justify-center bg-white shadow-lg">
            <div className="text-center">
              <div className="text-success text-[8px] font-bold tracking-wide">APPROVED</div>
              <div className="text-success text-lg leading-none">&#10003;</div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Slide03_LicensedEntity({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 2); }, [registerPhases, slideIndex]);

  // phase 0: Title + body text
  // phase 1: Both certificate cards side by side
  // phase 2: Approved stamps on BOTH cards

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="flex items-center gap-14 max-w-6xl w-full">
        {/* Left text */}
        <div className="flex-1">
          <motion.div
            className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pillar 1
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            You are dealing with a licensed entity
          </motion.h2>
          <motion.p
            className="text-lg text-text-secondary leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Valura has been scrutinized and approved by two Government of India authorities.
          </motion.p>
        </div>

        {/* Right - Cards side by side */}
        <div className="flex-shrink-0">
          {phase >= 1 && (
            <div className="flex gap-5 items-start">
              <CertificateCard
                title="IFSCA"
                subtitle="International Financial Services Centres Authority"
                visible={true}
                showStamp={phase >= 2}
                stampDelay={0}
              />
              <CertificateCard
                title="SEBI"
                subtitle="Securities and Exchange Board of India"
                visible={true}
                showStamp={phase >= 2}
                stampDelay={0.15}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
