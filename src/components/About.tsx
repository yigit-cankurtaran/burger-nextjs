"use client";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="container mx-auto px-6 py-24 bg-gray-100">
      <h2 className="text-4xl font-light mb-16 text-center">{t("About Us")}</h2>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg font-light mb-4">
          {t(
            "We are a cafe & bistro dedicated to providing the best experience in the city."
          )}
        </p>
        <p className="text-lg font-light">
          {t(
            "Our chefs use only the freshest ingredients to create mouth-watering dishes that will leave you coming back for more."
          )}
        </p>
      </div>
    </section>
  );
};
export default About;
