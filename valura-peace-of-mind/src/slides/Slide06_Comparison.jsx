import { motion } from 'framer-motion';

const rows = [
  { left: 'Money stays in India', right: 'Money goes overseas' },
  { left: 'Dispute → Ahmedabad', right: 'Dispute → US/Europe' },
  { left: 'No estate tax', right: '40% estate tax' },
];

export default function Slide06_Comparison() {
  return (
    <div className="w-full h-full flex items-center justify-center px-12">
      <div className="max-w-5xl w-full">
        {/* Center divider */}
        <div className="relative">
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-text-muted/30"
            initial={{ height: 0 }}
            animate={{ height: 350 }}
            transition={{ duration: 0.5 }}
            style={{ top: 0 }}
          />
        </div>

        {/* Headers */}
        <div className="grid grid-cols-2 gap-8 mb-10">
          <motion.h3
            className="text-3xl font-bold text-success text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            WITH VALURA
          </motion.h3>
          <motion.h3
            className="text-3xl font-bold text-danger text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            WITH OTHERS
          </motion.h3>
        </div>

        {/* Rows */}
        <div className="space-y-6">
          {rows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 gap-8">
              <motion.div
                className="rounded-lg border border-success/30 bg-success/5 p-5 text-center text-lg text-text-primary"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.3, duration: 0.4 }}
              >
                {row.left}
              </motion.div>
              <motion.div
                className={`rounded-lg border border-danger/30 bg-danger/5 p-5 text-center text-lg text-text-primary ${
                  i === 2 ? 'relative overflow-hidden' : ''
                }`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.3, duration: 0.4 }}
              >
                {row.right}
                {i === 2 && (
                  <motion.div
                    className="absolute inset-0 bg-danger/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                  />
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
