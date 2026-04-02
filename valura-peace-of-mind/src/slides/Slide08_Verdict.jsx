import { motion } from 'framer-motion';

const lines = [
  { text: 'No estate tax. Indian jurisdiction. Indian dispute resolution.', color: 'text-text-primary' },
  { text: "Your client's money is protected by the Indian legal system.", color: 'text-text-primary' },
];

export default function Slide08_Verdict() {
  return (
    <div className="w-full h-full flex items-center justify-center px-12">
      <div className="max-w-3xl text-center space-y-6">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            className={`text-2xl md:text-3xl font-medium leading-relaxed ${line.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5, duration: 0.6 }}
          >
            {line.text}
          </motion.p>
        ))}
        <motion.p
          className="text-text-muted text-lg italic mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Please do your own research on this — it is important.
        </motion.p>
      </div>
    </div>
  );
}
