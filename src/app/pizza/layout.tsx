import { Metadata } from "next";
import LocaleProvider from "@/components/LocaleProvider";

export const metadata: Metadata = {
  title: "NuZZret Cafe & Bistro | Toscana Pizza",
  description:
    "Birinci sınıf malzemelerle hazırlanan ikonik pizzalarımızı deneyimleyin.",
  keywords:
    "pizza, gurme pizza, Bolu, bolu, cafe, bistro, türkiye pizza, türk pizza, türkiye burger, türk burger, burger, hamburger, gurme burger, gurme hamburger",
  openGraph: {
    title: "NuZZret Cafe & Bistro | Toscana Pizza",
    description: "Eşsiz lezzetli gurme pizzalar",
    type: "website",
    images: [
      {
        url: "https://utfs.io/f/RGBMPHafKzag7ECbJZGunzDpm1rTXLF4CSoQcRWd06ekKhGY",
        width: 1200,
        height: 630,
        alt: "NuZZret Signature Pizzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NuZZret Cafe & Bistro | Toscana Pizza",
    description: "Eşsiz lezzetli gurme pizzalar",
    images: [
      "https://utfs.io/f/RGBMPHafKzag7ECbJZGunzDpm1rTXLF4CSoQcRWd06ekKhGY",
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
