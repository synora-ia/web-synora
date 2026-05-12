"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { LanguageProvider } from "./LanguageContext";

// Suppress the React 19 script tag warning which is a false positive for next-themes
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error;
  console.error = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return;
    }
    orig.apply(console, args);
  };
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}
