"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface MenuItem {
  url: string;
  title: string;
  description: string;
}

interface MenuProps {
  items: MenuItem[];
  title: string;
  subtitle?: string;
}

const Menu = ({ items, title, subtitle }: MenuProps) => {
  return (
    <section id="menu" className="container mx-auto px-6 py-24">
      <h2 className="text-4xl font-light mb-8 text-center">{title}</h2>
      {subtitle && <h3 className="text-xl font-light mb-8 text-center">{subtitle}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <Image
              src={item.url}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
              priority={false}
              height={640}
              width={960}
            />
            <h3 className="text-xl font-light mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
