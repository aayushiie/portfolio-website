import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ isLoading }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    let current = 0;

    const interval = setInterval(() => {
      current += 2;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
      }

      setProgress(current);
    }, 25);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-[#DCD7C9] text-[#2C3930]"
        >

          {/* Top Left Text */}
          <motion.p
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute top-10 left-10 text-sm tracking-[0.35em] text-[#3F4F44]"
          >
            loading aayushi's space :)
          </motion.p>


          {/* Bottom Right Content */}
          <div className="absolute bottom-10 right-10 flex flex-col items-end">

            {/* Progress Bar */}
            <div className="w-[90vw] h-[3px] bg-gray-300 overflow-hidden mb-5">
              <motion.div
                className="h-full bg-[#2C3930]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Percentage */}
            <motion.h1
              className="text-8xl leading-none"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              {progress}%
            </motion.h1>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}