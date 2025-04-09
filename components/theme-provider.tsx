"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add an effect to ensure theme is correctly applied after language changes
  useEffect(() => {
    // Get the stored theme from localStorage
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      // Ensure the theme class is applied to the document
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
