import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NuZZret Cafe & Bistro | Pizza & Burgers",
  description:
    "Premium pizza ve gurme burgerler NuZZret Cafe & Bistro'da. Rahat bir ortamda enfes lezzetler.",
  keywords:
    "burger, pizza, cafe, bistro, restaurant, yemek, Bolu, bolu, Türkiye, türk mutfağı, NuZZret, nuzzret, nuzzret cafe, nuzzret bistro, nuzzret cafe & bistro",
  openGraph: {
    title: "NuZZret Cafe & Bistro",
    description: "Eşsiz lezzetli gurme yemekler",
    type: "website",
    images: [
      {
        url: "/foodpics/1.jpg",
        width: 1200,
        height: 630,
        alt: "NuZZret Signature Burgers & Pizzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NuZZret Cafe & Bistro",
    description: "Eşsiz lezzetli gurme yemekler",
    images: ["/foodpics/1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
