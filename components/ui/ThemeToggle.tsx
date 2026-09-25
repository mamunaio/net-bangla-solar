"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

const emptySubscribe = () => () => {};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={!mounted ? "Toggle theme" : isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={!mounted ? "Toggle theme" : isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={cn(
        "relative w-9 h-9 rounded-xl border transition-all duration-300 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
        !mounted
          ? "border-white/10 bg-white/5 text-slate-400 opacity-60"
          : isDark
            ? "border-white/15 bg-white/5 hover:bg-orange-500/15 hover:border-orange-500/40 text-orange-400 hover:text-orange-300 shadow-[0_0_15px_rgba(255,107,0,0.2)] focus-visible:ring-offset-[#080B11]"
            : "border-slate-300 bg-slate-100 hover:bg-orange-50 hover:border-orange-500 text-orange-700 shadow-sm focus-visible:ring-offset-white",
        className
      )}
    >
      {!mounted ? (
        <Moon className="w-4 h-4" />
      ) : isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

export default ThemeToggle;
