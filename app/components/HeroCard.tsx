"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
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
        md:col-span-2
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
      <h1 className="text-3xl md:text-4xl font-bold">
        Welcome back, Pavitra
      </h1>

      <p className="mt-3 text-zinc-400">
        Continue your learning journey.
      </p>

      <div className="inline-block mt-6 px-4 py-2 rounded-full bg-zinc-800">
         17 Day Learning Streak
      </div>
    </motion.article>
  );
}