import { Metadata } from "next";
import LocaleProvider from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: "NuZZret Cafe & Bistro | Chef's Buffalo Burger",
  description:
    "Birinci sınıf malzemelerle hazırlanan ikonik burgerlerimizi deneyimleyin. Klasik hamburgerden eşsiz gurme burgerlere kadar.",
  keywords:
    "burger, hamburger, Bolu, bolu, gurme burger, gurme hamburger, pizza, gurme pizza, cafe, bistro, türkiye burger, türk burger, türkiye pizza, türk pizza",
  openGraph: {
    title: "NuZZret Cafe & Bistro | Chef's Buffalo Burger",
    description: "Eşsiz lezzetli gurme burgerler",
    type: "website",
    images: [
      {
        url: "https://utfs.io/f/RGBMPHafKzagFTkzz4r93MdughzF2KovnXHIwNtk1m0aC865",
        width: 1200,
        height: 630,
        alt: "NuZZret Signature Burgers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NuZZret Cafe & Bistro | Chef's Buffalo Burger",
    description: "Eşsiz lezzetli gurme burgerler",
    images: [
      "https://utfs.io/f/RGBMPHafKzagFTkzz4r93MdughzF2KovnXHIwNtk1m0aC865",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider>
      <body>{children}</body>
    </LocaleProvider>
  );
}
