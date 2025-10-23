"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Lang, translations } from "@/lib/translations";

interface LangContextType {
  lang: Lang;
  t: (typeof translations)["mm"]; // shape of one lang object
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mm");

  // load from localStorage once on mount
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLangState(saved);
  }, []);

  // sync to localStorage whenever language changes
  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("lang", l);
  }

  const value: LangContextType = {
    lang,
    t: translations[lang],
    setLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// custom hook
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
