"use client";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-light mb-16 text-center">
        {t("Contact Us")}
      </h2>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg font-light mb-4">
          {t("Have any questions or feedback? We'd love to hear from you!")}
        </p>
        <p className="text-lg font-light">phone number</p>
        <a className="text-green-600" href="mailto:random@mail.com">
          e-mail
        </a>
        <p className="text-pretty text-lg font-extralight">address</p>
      </div>
    </section>
  );
};
export default Contact;
