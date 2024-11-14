"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-light text-green-500">
            Nu<span className="text-red-500">ZZ</span>ret
          </Link>
          <div className="space-x-8 text-sm">
            <a href="#menu" className="hover:text-gray-600 transition">
              {t("MENU")}
            </a>
            <a href="#about" className="hover:text-gray-600 transition">
              {t("ABOUT")}
            </a>
            <a href="#contact" className="hover:text-gray-600 transition">
              {t("CONTACT")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
