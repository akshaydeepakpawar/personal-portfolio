import React from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatorProps extends MotionProps {
  children: React.ReactNode;
}

export const Animator = ({
  children,
  initial,
  whileInView,
  viewport,
  transition,
  ...rest
}: AnimatorProps) => {
  return (
    <motion.div
      initial={initial ?? { opacity: 0, y: 20 }}
      whileInView={whileInView ?? { opacity: 1, y: 0 }}
      viewport={viewport ?? { once: true, amount: 0.2 }}
      transition={transition ?? { type: "spring", stiffness: 300, damping: 20 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};