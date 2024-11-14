"use client";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-light">{t("2024 Yiğit Cankurtaran. All rights reserved.")}</p>
      </div>
    </footer>
  );
};
export default Footer;
