"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {
  const bars = [40, 80, 60, 100, 70, 50, 90];

  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{
        scale: 1.02,
      }}
      className="
        rounded-3xl
        bg-gradient-to-br
        from-zinc-900
        to-zinc-800
        p-6
        border
        border-zinc-800
        hover:border-green-500
        hover:shadow-[0_0_25px_rgba(34,197,94,0.20)]
        transition-all
        duration-300
      "
    >
      <h2 className="text-xl font-semibold">
        Weekly Activity
      </h2>

      <div className="mt-6 flex items-end gap-3 h-40">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{
              height: 0,
            }}
            animate={{
              height: `${height}%`,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            className="flex-1 rounded bg-green-500"
          />
        ))}
      </div>
    </motion.article>
  );
}