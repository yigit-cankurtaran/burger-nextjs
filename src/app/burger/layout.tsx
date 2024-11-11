import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NuZZret Cafe & Bistro | Chef's Buffalo Burger",
  description:
    "Birinci sınıf malzemelerle hazırlanan ikonik burgerlerimizi deneyimleyin. Klasik hamburgerden eşsiz Türk füzyon yemeklerine kadar.",
  keywords:
    "burger, hamburger, Bolu, bolu, gurme burger, gurme hamburger, pizza, gurme pizza, cafe, bistro, türkiye burger, türk burger, türkiye pizza, türk pizza",
  openGraph: {
    title: "NuZZret Cafe & Bistro | Chef's Buffalo Burger",
    description: "Eşsiz lezzetli gurme burgerler",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/foodpics/1.jpg",
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
    images: ["/foodpics/1.jpg"],
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
  return children;
}
