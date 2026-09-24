"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSnapshot(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("netbangla-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Ignore
  }
  return "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function applyThemeToDOM(theme: Theme) {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem("netbangla-theme", newTheme);
    } catch {
      // Ignore
    }
    applyThemeToDOM(newTheme);
    listeners.forEach((listener) => listener());
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getSnapshot();
    const next: Theme = current === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("netbangla-theme", next);
    } catch {
      // Ignore
    }
    applyThemeToDOM(next);
    listeners.forEach((listener) => listener());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
