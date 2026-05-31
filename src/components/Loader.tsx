import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[1000] bg-navy-dark flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src="https://i.postimg.cc/wx0zC3F3/Minimalist-professional-logo-for-a-202605101222-Photoroom.png"
              alt="Alto Logo"
              className="h-48 md:h-72 w-auto object-contain"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute -bottom-8 left-0 w-full h-[2px] bg-primary origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
