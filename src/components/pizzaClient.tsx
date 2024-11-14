"use client";
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Slider from './Slider';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

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
      // keeping these here because we need the translations on the client
      // TODO: after moving the translations to the server
      // handle them there and move the data to its own file
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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider slides={slides} />
      <Menu items={pizzas} title={t("Our Menu")} subtitle={t("We have small, medium and large pizza options")} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
