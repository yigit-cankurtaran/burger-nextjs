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
    description: "Rahat bir ortamda premium pizza ve gurme burgerler",
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
