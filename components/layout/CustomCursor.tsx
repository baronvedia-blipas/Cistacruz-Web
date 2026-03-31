"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    const hasTouch = "ontouchstart" in window;
    if (hasTouch) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", move);

    const observe = () => {
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    observe();
    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-blue rounded-full pointer-events-none z-[999] mix-blend-difference"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "tween", duration: 0 }}
      />
      {/* Follower */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[998] border transition-all duration-200 ${
          hovered
            ? "w-12 h-12 border-brand-blue/60 bg-brand-blue/10"
            : "w-8 h-8 border-white/30 bg-transparent"
        }`}
        animate={{
          x: pos.x - (hovered ? 24 : 16),
          y: pos.y - (hovered ? 24 : 16),
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
