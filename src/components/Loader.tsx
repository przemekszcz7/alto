import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import loaderLogo from '../assets/images/regenerated_image_1780829676018.png';

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
              src={loaderLogo}
              alt="Alto - Nowoczesna agencja marketingowa dla Twojej firmy"
              fetchPriority="high"
              width={240}
              height={240}
              className="h-24 md:h-32 w-auto object-contain brightness-[1.05] contrast-[1.2] drop-shadow-[0_0_28px_rgba(201,168,76,0.35)] saturate-[1.25]"
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
