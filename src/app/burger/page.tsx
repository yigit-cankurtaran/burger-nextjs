"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const RestaurantWebsite = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize the slides and burgers arrays to prevent recreating on each render
  const slides = useMemo(
    () => [
      {
        url: "https://utfs.io/f/RGBMPHafKzagFTkzz4r93MdughzF2KovnXHIwNtk1m0aC865",
        title: t("Signature Burgers"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagrLH96O0Xv5n7DcMzkHFNr6hlAsK0YqmVoByf",
        title: t("Fresh Ingredients"),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagJQ9UARWgY2auvO5XKyAw3MeJZVDHht40cQU7",
        title: t("Cozy Atmosphere"),
      },
    ],
    [t]
  );

  const burgers = useMemo(
    () => [
      {
        url: "https://utfs.io/f/RGBMPHafKzagFTkzz4r93MdughzF2KovnXHIwNtk1m0aC865",
        title: t("Chef's Burger"),
        description: t(
          "2 pieces of Chef's Buffalo meatballs, 2 pieces of cheddar cheese, caramelized mushrooms, caramelized onions, french fries, special Chef's sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagrLH96O0Xv5n7DcMzkHFNr6hlAsK0YqmVoByf",
        title: t("Gourmet Burger"),
        description: t(
          "Buffalo meatballs cooked on charcoal fire, onion rings, tomato slices, 40 gr. tenderloin, barbecue sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagJQ9UARWgY2auvO5XKyAw3MeJZVDHht40cQU7",
        title: t("Crispy Chicken Burger"),
        description: t(
          "150 gr. crispy chicken thigh, curly lettuce, onion rings, tomato slices, crispy pickles, ranch sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzag1vHVYqLlwQMcNr8WuTUezhKmX7xGJIZfpCdD",
        title: t("Cheeseburger"),
        description: t(
          "Homemade meatballs, curly lettuce, onion rings, diced tomato slices, cheddar cheese, sauce, sliced pickles, ranch sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzag5w5lqEVnlxXWDvk8ENO1tAjgzKqUeRH6Pbfc",
        title: t("Classic Burger"),
        description: t(
          "Chef's meatballs, curly lettuce, onion rings, tomato slices, pickles, ranch sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzag8zsEfaW2uDgQzK4lS2HTAaXYVECsndRp3m5t",
        title: t("Barbecue Burger"),
        description: t(
          "Butcher's meatballs, butcher's sausage, onion rings, two slices of tomato, sweet red pepper, barbecue sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagFHuFgIr93MdughzF2KovnXHIwNtk1m0aC865",
        title: t("Anatolia Burger"),
        description: t(
          "Homemade meatballs, kolot cheese, onion rings, tomato slices, curly lettuce, ranch sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagDfc4XvTMLrNdgWqf0Y4pAxEnyOkUemTGS3Ru",
        title: t("Eggy Burger"),
        description: t(
          "Chef's meatballs, cheddar cheese, ranch sauce, ham, egg"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagPm38bDZcGkvA5oKHmZsz4fT2N6E8uMayjbIR",
        title: t("Hellim Burger"),
        description: t(
          "Meatballs cooked on charcoal, lettuce pieces, onion rings, tomato slices, pickle pieces, grilled halloumi cheese, mixed sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagLDmkyJjKPUHMmAifxquQ4IYnwy5FC6k0veOB",
        title: t("El Toro Burger"),
        description: t(
          "Chef's meatballs mixed with Mexican spices, broken onion rings, curly lettuce, tomato slices, red pepper, jalapeno pepper, hot sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzag6IL1TNCkyUfDNxE3JQuhLjOAa8GgtCScrKl9",
        title: t("Ottoman Burger"),
        description: t(
          "Butcher's baton sausage, curly lettuce, tomato slices, diced pickles, onion rings, matchstick potato chips, ranch sauce"
        ),
      },
      {
        url: "https://utfs.io/f/RGBMPHafKzagBGDLKawBpyAvm9NHfuSRDM7rXjiFkg6slzP0",
        title: t("Grilled Chicken Burger"),
        description: t(
          "Grilled chicken thigh with barbecue flavor, curly lettuce, onion rings, tomato slices, pickles, ranch sauce"
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
        <h2 className="text-4xl font-light mb-8 text-center">
          {t("Our Menu")}
        </h2>
        <h3 className="text-xl font-light mb-8 text-center">
          {t("We have options for 100, 150 and 200 gram burger patties.")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {burgers.map((burger, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <Image
                src={burger.url}
                alt={burger.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                priority={false}
                height={640}
                width={960}
              />
              <h3 className="text-xl font-light mb-2">{burger.title}</h3>
              <p className="text-gray-600">{burger.description}</p>
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
};

export default RestaurantWebsite;
