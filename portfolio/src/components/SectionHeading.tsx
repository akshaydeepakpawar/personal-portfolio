import { motion } from "framer-motion";

/**
 * Reusable heading component for each section.
 * Applies a gradient text style and a scroll‑into‑view fade‑up animation.
 */
export const SectionHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.h2
      className="section-heading text-gradient-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
};