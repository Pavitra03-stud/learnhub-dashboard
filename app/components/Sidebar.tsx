"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Progress",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          md:hidden
          fixed
          top-4
          left-4
          z-50
          bg-zinc-900
          p-2
          rounded-lg
          text-white
        "
      >
        <Menu size={22} />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed xl:static
          top-0 left-0
          z-40
          h-screen
          bg-zinc-950
          border-r border-zinc-800
          p-6
          transition-transform duration-300

          w-64 md:w-20 xl:w-64

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Mobile Close */}
        <button
          onClick={() => setOpen(false)}
          className="md:hidden absolute top-4 right-4 text-zinc-400"
        >
          <X size={22} />
        </button>

        {/* Logo */}
        <div>
          {/* Mobile + Desktop */}
          <h1 className="text-2xl font-bold text-white md:hidden xl:block">
            LearnHub
          </h1>

          {/* Tablet */}
          <h1 className="hidden md:block xl:hidden text-2xl font-bold text-white text-center">
            LH
          </h1>

          <p className="text-zinc-500 text-sm mt-2 hidden xl:block">
            Student Dashboard
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-10 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);

                  if (window.innerWidth < 768) {
                    setOpen(false);
                  }
                }}
                className="
                  relative
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-lg
                  px-4
                  py-3
                "
              >
                {active === item.name && (
                  <motion.div
                    layoutId="activeNav"
                    className="
                      absolute
                      inset-0
                      rounded-lg
                      bg-zinc-900
                    "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  />
                )}

                <Icon
                  size={20}
                  className={`
                    relative z-10 shrink-0
                    ${
                      active === item.name
                        ? "text-white"
                        : "text-zinc-400"
                    }
                  `}
                />

                {/* Mobile + Desktop Text */}
                <span
                  className={`
                    relative z-10
                    md:hidden xl:block
                    ${
                      active === item.name
                        ? "text-white"
                        : "text-zinc-400"
                    }
                  `}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}