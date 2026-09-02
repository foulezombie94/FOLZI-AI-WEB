"use client";

import React, { createContext, useContext } from "react";

export type Locale = "fr" | "en" | "es";

interface LanguageContextType {
  locale: Locale;
}

const LanguageContext = createContext<LanguageContextType>({ locale: "fr" });

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <LanguageContext.Provider value={{ locale }}>
      {children}
    </LanguageContext.Provider>
  );
}
