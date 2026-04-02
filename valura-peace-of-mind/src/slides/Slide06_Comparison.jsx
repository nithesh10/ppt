import { motion } from 'framer-motion';
import { useEffect } from 'react';

const rows = [
  {
    left: { text: 'Money stays in India', icon: '🏦' },
    right: { text: 'Money goes overseas', icon: '✈️' },
  },
  {
    left: { text: 'Dispute → Indian courts', icon: '⚖️' },
    right: { text: 'Dispute → US/Europe courts', icon: '🌍' },
  },
  {
    left: { text: '0% Estate Tax', icon: '✅' },
    right: { text: '40% Estate Tax', icon: '💸' },
  },
];

export default function Slide06_Comparison({ phase, registerPhases, slideIndex }) {
  useEffect(() => { registerPhases(slideIndex, 3); }, [registerPhases, slideIndex]);

  // phase 0: Headers + divider
  // phase 1: Row 1
  // phase 2: Row 2
  // phase 3: Row 3 with red emphasis

  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="max-w-5xl w-full">
        {/* Headers */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 bg-success/10 border border-success/30 rounded-full px-6 py-3">
              <img src="/valura-logo.jpg" alt="" className="w-7 h-7 rounded-md" />
              <span className="text-2xl font-bold text-success">WITH VALURA</span>
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 bg-danger/5 border border-danger/30 rounded-full px-6 py-3">
              <span className="text-2xl font-bold text-danger">WITH OTHERS</span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="mx-auto w-[2px] bg-border mb-6"
          style={{ position: 'absolute', left: '50%', marginLeft: -1 }}
          initial={{ height: 0 }}
          animate={{ height: 280 }}
          transition={{ duration: 0.5 }}
        />

        {/* Rows */}
        <div className="space-y-4">
          {rows.map((row, i) => {
            const visible = phase >= i + 1;
            if (!visible) return <div key={i} className="h-16" />;
            const isLast = i === 2;
            return (
              <motion.div
                key={i}
                className="grid grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-xl border border-success/20 bg-white p-5 text-center shadow-sm flex items-center justify-center gap-3">
                  <span className="text-xl">{row.left.icon}</span>
                  <span className="text-lg font-medium text-text-primary">{row.left.text}</span>
                </div>
                <div className={`rounded-xl border bg-white p-5 text-center shadow-sm flex items-center justify-center gap-3 relative overflow-hidden ${
                  isLast ? 'border-danger/40' : 'border-danger/20'
                }`}>
                  <span className="text-xl">{row.right.icon}</span>
                  <span className={`text-lg font-medium ${isLast ? 'text-danger font-bold' : 'text-text-primary'}`}>
                    {row.right.text}
                  </span>
                  {isLast && (
                    <motion.div
                      className="absolute inset-0 bg-danger/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0.1] }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
