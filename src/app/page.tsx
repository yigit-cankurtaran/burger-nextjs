"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import "../i18n";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-800 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-light mb-2">
            <span className="text-green-500">Nu</span>
            <span className="text-red-500">ZZ</span>
            <span className="text-green-500">ret</span>
          </h1>

          <h2 className="text-2xl font-light mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-500">
              cafe & bistro
            </span>
          </h2>

          <div className="flex gap-20 items-center">
            <Link href="/pizza">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-white"
              >
                <span className="text-xl">←</span>
                <span className="text-lg">Pizza</span>
              </motion.div>
            </Link>

            <Link href="/burger">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-white"
              >
                <span className="text-lg">Burger</span>
                <span className="text-xl">→</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
