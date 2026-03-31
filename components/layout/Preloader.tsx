"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show on first visit per session
    const seen = sessionStorage.getItem("preloader-seen");
    if (seen) {
      setVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem("preloader-seen", "1");
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-sans text-white font-bold text-3xl md:text-5xl tracking-[0.4em] uppercase mb-2">
              Cistacruz
            </h1>
            <p className="text-brand-blue text-sm tracking-[0.3em] uppercase mb-10">
              Construimos tu éxito
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-brand-blue rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-white/40 text-xs mt-3 font-sans tabular-nums">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
