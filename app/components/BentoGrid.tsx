"use client";

import { motion } from "framer-motion";

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="
        grid
        gap-6
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        auto-rows-fr
      "
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}