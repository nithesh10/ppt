import { motion, AnimatePresence } from 'framer-motion';

const slideNames = [
  'Opening', 'Trust Transition', 'Licensed Entity', 'What It Means',
  'Money in India', 'Comparison', 'Estate Tax', 'The Verdict',
  'Digital Journey', 'Checkmarks', 'Three Pillars', 'Closing'
];

export default function SlideOverview({ show, current, onSelect, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-navy/95 flex items-center justify-center"
          onClick={onClose}
        >
          <div className="grid grid-cols-4 gap-4 p-8 max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {slideNames.map((name, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => onSelect(i)}
                className={`p-4 rounded-lg border text-left transition-colors cursor-pointer ${
                  i === current
                    ? 'border-cyan bg-cyan/10 text-cyan'
                    : 'border-text-muted/30 hover:border-cyan/50 text-text-secondary'
                }`}
              >
                <div className="text-xs opacity-50 mb-1">Slide {i + 1}</div>
                <div className="text-sm font-medium">{name}</div>
              </motion.button>
            ))}
          </div>
          <div className="absolute bottom-6 text-text-muted text-sm">
            Press Escape or click outside to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
