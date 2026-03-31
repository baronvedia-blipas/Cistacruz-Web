"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 w-11 h-11 bg-brand-navy/80 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-brand-blue transition-colors"
          aria-label="Volver arriba"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
