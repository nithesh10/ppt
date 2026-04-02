import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';

// Generate pixel positions for "VALURA" text using canvas
function getTextPositions(text, fontSize = 80) {
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 120;
  const ctx = canvas.getContext('2d');
  ctx.font = `bold ${fontSize}px Inter, system-ui, sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 300, 60);

  const imageData = ctx.getImageData(0, 0, 600, 120);
  const positions = [];
  for (let y = 0; y < 120; y += 4) {
    for (let x = 0; x < 600; x += 4) {
      const idx = (y * 600 + x) * 4;
      if (imageData.data[idx + 3] > 128) {
        positions.push({ x: x - 300, y: y - 60 });
      }
    }
  }

  // Sample ~100 particles
  const step = Math.max(1, Math.floor(positions.length / 100));
  return positions.filter((_, i) => i % step === 0).slice(0, 100);
}

export default function Slide01_Opening() {
  const [particles, setParticles] = useState([]);
  const [converged, setConverged] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const scatterPositions = useMemo(() =>
    Array.from({ length: 100 }, () => ({
      x: (Math.random() - 0.5) * window.innerWidth * 0.8,
      y: (Math.random() - 0.5) * window.innerHeight * 0.8,
    })), []);

  useEffect(() => {
    const pts = getTextPositions('VALURA', 80);
    setParticles(pts);
    const t1 = setTimeout(() => setConverged(true), 100);
    const t2 = setTimeout(() => setShowLine(true), 2200);
    const t3 = setTimeout(() => setShowSubtitle(true), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="relative" style={{ width: 600, height: 200 }}>
        {/* Particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: 600, height: 120 }}>
            {particles.map((target, i) => {
              const scatter = scatterPositions[i] || { x: 0, y: 0 };
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: '#4EA8DE',
                    boxShadow: '0 0 6px #4EA8DE',
                    left: '50%',
                    top: '50%',
                    willChange: 'transform',
                  }}
                  initial={{ x: scatter.x, y: scatter.y, opacity: 0.6 }}
                  animate={converged ? {
                    x: target.x,
                    y: target.y,
                    opacity: 1,
                  } : undefined}
                  transition={{
                    type: 'spring',
                    stiffness: 60,
                    damping: 12,
                    delay: i * 0.01,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Divider line */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 110 }}>
          <motion.div
            className="h-[1px] bg-cyan"
            initial={{ width: 0 }}
            animate={showLine ? { width: 400 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ marginLeft: -200 }}
          />
        </div>

        {/* Subtitle */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 text-text-secondary text-lg tracking-[0.3em] uppercase"
          style={{ top: 130 }}
          initial={{ opacity: 0 }}
          animate={showSubtitle ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Peace of Mind
        </motion.div>
      </div>
    </div>
  );
}
