"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiColorSwatch, HiX } from "react-icons/hi";
import { themes, DEFAULT_THEME, THEME_STORAGE_KEY, themeLabels } from "./themes";

export function applyTheme(themeId) {
  document.documentElement.setAttribute("data-theme", themeId);
}

export function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(THEME_STORAGE_KEY) || DEFAULT_THEME;
    setActiveTheme(saved);
    applyTheme(saved);
  }, []);

  const selectTheme = (themeId) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
    localStorage.setItem(THEME_STORAGE_KEY, themeId);
    setOpen(false);
  };

  if (!mounted) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <button
          type="button"
          className="theme-toggle-btn liquid-glass p-2.5 rounded-xl"
          aria-label="تغییر تم"
        >
          <HiColorSwatch className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 z-50">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="theme-toggle-btn liquid-glass p-2.5 rounded-xl"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        aria-label="تغییر تم"
        aria-expanded={open}
      >
        {open ? <HiX className="w-5 h-5" /> : <HiColorSwatch className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="theme-panel liquid-glass-strong absolute top-full left-0 mt-2 p-2.5 rounded-2xl"
          >
            <div className="flex flex-wrap gap-2 max-w-[7.5rem]">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => selectTheme(theme.id)}
                  className={`theme-swatch w-8 h-8 rounded-full transition-all duration-200 ${
                    activeTheme === theme.id ? "theme-swatch-active" : ""
                  }`}
                  style={{ background: theme.preview }}
                  aria-label={`تم ${themeLabels[theme.id]}`}
                  aria-pressed={activeTheme === theme.id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
