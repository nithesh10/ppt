import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function CertificateCard({ title, subtitle, delay, rotate }) {
  return (
    <motion.div
      className="w-64 h-80 rounded-lg border-2 border-gold p-6 flex flex-col items-center justify-between"
      style={{ boxShadow: 'inset 0 2px 20px rgba(201,168,76,0.1)' }}
      initial={{ opacity: 0, rotate: rotate + 3 }}
      animate={{ opacity: 1, rotate }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
    >
      <div className="text-center">
        <div className="text-gold text-2xl font-bold tracking-wider">{title}</div>
        <div className="text-text-muted text-xs mt-2 leading-relaxed">{subtitle}</div>
      </div>
      {/* Seal */}
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="28" stroke="#C9A84C" strokeWidth="2" fill="none" />
        <circle cx="30" cy="30" r="22" stroke="#C9A84C" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        <text x="30" y="34" textAnchor="middle" fill="#C9A84C" fontSize="10" fontWeight="bold">SEAL</text>
      </svg>
    </motion.div>
  );
}

export default function Slide03_LicensedEntity() {
  const [showStamp, setShowStamp] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStamp(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center px-12">
      <div className="flex items-center gap-16 max-w-6xl w-full">
        {/* Left */}
        <div className="flex-1">
          <motion.div
            className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Pillar 1
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            You are dealing with a licensed entity
          </motion.h2>
          <motion.p
            className="text-lg text-text-secondary"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Valura has been scrutinized and approved by two Government of India authorities.
          </motion.p>
        </div>

        {/* Right - Certificates */}
        <div className="relative flex-shrink-0" style={{ width: 300, height: 360 }}>
          <div className="absolute top-0 left-0">
            <CertificateCard title="IFSCA" subtitle="International Financial Services Centres Authority" delay={0.6} rotate={-2} />
          </div>
          <div className="absolute top-6 left-8">
            <CertificateCard title="SEBI" subtitle="Securities and Exchange Board of India" delay={1.0} rotate={2} />
          </div>

          {/* Approved Stamp */}
          {showStamp && (
            <motion.div
              className="absolute -bottom-4 right-0 z-10"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: [0, 1.1, 1], rotate: [- 20, -15, -12] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="w-24 h-24 rounded-full border-3 border-success flex items-center justify-center bg-navy">
                <div className="text-center">
                  <div className="text-success text-xs font-bold">APPROVED</div>
                  <div className="text-success text-2xl">&#10003;</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
