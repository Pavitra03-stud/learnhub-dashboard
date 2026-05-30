"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Palette,
  FileCode,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  iconName: string;
}

const iconMap = {
  Code,
  Rocket,
  Palette,
  FileCode,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  const Icon =
    iconMap[iconName as keyof typeof iconMap] || Code;

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
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-br
        from-zinc-900
        to-zinc-800
        p-6
        border
        border-zinc-800
        hover:border-green-500
        hover:shadow-[0_0_25px_rgba(34,197,94,0.25)]
        transition-all
        duration-300
      "
    >
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#22c55e,transparent_40%)]" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <Icon
            size={22}
            className="text-green-400"
          />
        </div>

        <div className="mt-4 h-2 rounded-full bg-zinc-700 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1 }}
            className="h-2 rounded-full bg-green-500"
          />
        </div>

        <p className="mt-3 text-zinc-300">
          {progress}% Complete
        </p>
      </div>
    </motion.article>
  );
}