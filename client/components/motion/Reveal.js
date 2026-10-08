"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  y = 28
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
