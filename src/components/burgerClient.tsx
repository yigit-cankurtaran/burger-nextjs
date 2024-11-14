"use client";
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Slider from './Slider';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function BurgerClient() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // changing slides every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);
  // changes when slides.length changes



  const burgers = useMemo(
    () => [
      // keeping these here because we need the translations on the client
      // TODO: after moving the translations to the server
      // handle them there and move the data to its own file
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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider slides={slides} />
      <Menu items={burgers} title={t("Our Menu")} subtitle={t("We have options for 100, 150 and 200 gram burger patties.")} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
