"use client";

import { useI18n } from "@/lib/i18n";

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="flex items-center gap-1.5 text-xs font-sans font-medium uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20 hover:border-brand-blue/50 hover:bg-brand-blue/10 transition-all text-white/70 hover:text-white"
      aria-label="Toggle language"
    >
      <span className={locale === "es" ? "text-brand-blue" : "opacity-50"}>ES</span>
      <span className="text-white/30">|</span>
      <span className={locale === "en" ? "text-brand-blue" : "opacity-50"}>EN</span>
    </button>
  );
}
