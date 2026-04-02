import { motion } from 'framer-motion';

const pillarData = {
  1: { label: 'Pillar 1', title: 'Licensed Entity', color: '#C9A84C' },
  2: { label: 'Pillar 2', title: 'Money in India', color: '#2E7D32' },
  3: { label: 'Pillar 3', title: 'Fully Digital', color: '#4EA8DE' },
};

export default function PillarBadge({ pillar }) {
  const data = pillarData[pillar];
  if (!data) return null;

  return (
    <motion.div
      className="absolute top-6 left-8 z-40 flex items-center gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Pillar number circle */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
        style={{ backgroundColor: data.color }}
      >
        {pillar}
      </div>
      {/* Label */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted">
          {data.label}
        </div>
        <div className="text-sm font-medium text-text-primary leading-tight">
          {data.title}
        </div>
      </div>
    </motion.div>
  );
}
