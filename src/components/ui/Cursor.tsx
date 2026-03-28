"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useVelocity } from "framer-motion";

export const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Track position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // 1. High spring for the tiny, bright core dot (snaps instantly)
  const coreSpring = { damping: 20, stiffness: 500, mass: 0.1 };
  const coreX = useSpring(cursorX, coreSpring);
  const coreY = useSpring(cursorY, coreSpring);

  // 2. Loose, heavy spring for the trailing multi-colored aura
  const auraSpring = { damping: 30, stiffness: 120, mass: 0.8 };
  const auraX = useSpring(cursorX, auraSpring);
  const auraY = useSpring(cursorY, auraSpring);

  // Velocity based trailing to stretch the aura when moving fast
  const velocityX = useVelocity(cursorX);
  const scaleX = useTransform(velocityX, (v) => {
    return Math.min(Math.max(Math.abs(v) / 800 + 1, 1), 1.5);
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const moveCursor = (e: MouseEvent) => {
      // Offset by half dimensions to center
      cursorX.set(e.clientX - 4); // 8px core
      cursorY.set(e.clientY - 4);
      setIsVisible(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 50); // Instantly hide on stop
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(timeoutId);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Glowing, Color-Shifting Aura */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.3 : 0 }}
        transition={{ duration: 0.15 }}
        style={{
          x: auraX,
          y: auraY,
          scaleX,
          marginLeft: -28, 
          marginTop: -28,
        }}
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[9998] hidden md:block mix-blend-screen"
      >
        <div className="absolute inset-0 rounded-full blur-md bg-white border border-white/20" />
      </motion.div>

      {/* Tiny Intense Core Dot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        style={{
          x: coreX,
          y: coreY,
        }}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden md:block shadow-[0_0_15px_2px_rgba(255,255,255,0.8)]"
      />
    </>
  );
};
