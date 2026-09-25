"use client";

import React, { createContext, useContext, useCallback, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSnapshot(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem("netbangla-theme");
    if (saved === "light") return saved;
    // If previously saved dark, reset to light
    if (saved === "dark") {
      localStorage.setItem("netbangla-theme", "light");
    }
  } catch {
    // Ignore
  }
  return "light";
}

function getServerSnapshot(): Theme {
  return "light";
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
    const next: Theme = current === "light" ? "dark" : "light";
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
