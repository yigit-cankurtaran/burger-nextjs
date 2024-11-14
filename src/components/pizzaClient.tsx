"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export default function PizzaClient() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize the slides and burgers arrays to prevent recreating on each render
  const slides = useMemo(
    () => [
      {
        url: "https://utfs.io/f/RGBMPHafKzag7ECbJZGunzDpm1rTXLF4CSoQcRWd06ekKhGY",
        title: t("Signature Pizzas"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagXyg0pS9vVdTJFZ46ciAEW57gj9LnNuxMq1fD",
        title: t("Fresh Ingredients"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagFTZDDKr93MdughzF2KovnXHIwNtk1m0aC865",
        title: t("Cozy Atmosphere"),
      },
    ],
    [t]
  );

  const pizzas = useMemo(
    () => [
      {
        url: "https://utfs.io/f/RGBMPHafKzag7ECbJZGunzDpm1rTXLF4CSoQcRWd06ekKhGY",
        title: "Toscana Pizza",
        description: t("Beef salami, beef sausage, mushrooms"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagXyg0pS9vVdTJFZ46ciAEW57gj9LnNuxMq1fD",
        title: "Quetro Pizza",
        description: t(
          "Mozzarella cheese, kaşar cheese, parmesan cheese, cheddar cheese"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagFTZDDKr93MdughzF2KovnXHIwNtk1m0aC865",
        title: "Del Alpe Pizza",
        description: t("Mozzarella cheese, tomato sauce, sausage"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagi90yfahvzRAH8deju3W04UCqrTxNoIYgsJBp",
        title: "BBQ Pizza",
        description: t("Chicken with barbecue sauce, red pepper, green pepper"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzag91BTxXFlFp0Tx7OH2gZdcqt48amRY5WLDQns",
        title: "Salome Pizza",
        description: t("Mozzarella cheese, tomato sauce, tuna fish, corn"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagRbUUSbafKzagNHk021q6JnS9YcwTm8edAsrt",
        title: "Margherita Pizza",
        description: t("Mozzarella cheese, tomato sauce"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagTo9FG5i9KZnMgAOy0RJPiruHDvm1pQb6ezsG",
        title: "Funghi Pizza",
        description: t("Tomato sauce, mozzarella cheese, mushrooms, corn"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagr5EMrG0Xv5n7DcMzkHFNr6hlAsK0YqmVoByf",
        title: "Pat Pizza",
        description: t(
          "Base sauce, mozzarella cheese, red pepper, green pepper, french fries, garlic mix sauce"
        ),
      },
    ],
    [t]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // changing slides every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);
  // changes when slides.length changes

  return (
    <div className="min-h-screen bg-white">
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

      <div className="relative h-screen">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000
                ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              {(index === currentSlide ||
                index === (currentSlide + 1) % slides.length) && (
                  <Image
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0 ? true : false}
                    height={1080}
                    width={1920}
                  />
                )}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-6xl font-light mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="text-xl font-light">
              {t("Experience culinary excellence")}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all
                ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      <section id="menu" className="container mx-auto px-6 py-24">
        <h2 className="text-4xl font-light mb-16 text-center">
          {t("Our Menu")}
        </h2>
        <h3 className="text-xl text-center font-light mb-8">
          {t("We have small, medium and large pizza options")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {pizzas.map((pizza, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Image
                src={pizza.url}
                alt={pizza.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                priority={false}
                height={480}
                width={640}
              />
              <h3 className="text-xl font-light mb-2">{pizza.title}</h3>
              <p className="text-gray-600">{pizza.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="container mx-auto px-6 py-24 bg-gray-100">
        <h2 className="text-4xl font-light mb-16 text-center">
          {t("About Us")}
        </h2>
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-light">
            {t("2024 Yiğit Cankurtaran. All rights reserved.")}
          </p>
        </div>
      </footer>
    </div>
  );
}
