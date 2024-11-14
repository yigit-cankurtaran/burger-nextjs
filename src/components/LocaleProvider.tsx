"use client";
// we use this to get the language from the browser
// and set it in the i18n instance
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function LocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set default language or get from localStorage
    const savedLang = localStorage.getItem("i18nextLng") || "tr";
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  return <>{children}</>;
}
