"use client";

import { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Magnetic = ({ children, strength = 30 }: { children: React.ReactNode, strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const position = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    position.x.set((middleX / width) * strength);
    position.y.set((middleY / height) * strength);
  };

  const reset = () => {
    setIsHovered(false);
    position.x.set(0);
    position.y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ x: position.x, y: position.y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};
