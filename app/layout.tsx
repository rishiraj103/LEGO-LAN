import type { Metadata } from "next";
import { Syne, Hanken_Grotesk, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEGO ÉLAN — Architectural Perfumery & Tactile Essence Design",
  description:
    "Don't wear a signature. Build one. LEGO ÉLAN redefines luxury fragrance into a bespoke, modular, tactile art form crafted by you.",
  keywords: [
    "LEGO ÉLAN",
    "luxury fragrance",
    "architectural perfumery",
    "custom fragrance",
    "modular perfume",
    "bespoke scent",
  ],
  openGraph: {
    title: "LEGO ÉLAN — Architectural Perfumery",
    description: "Don't wear a signature. Build one. Modular luxury fragrance crafted by you.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} ${displayFont.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased overflow-x-hidden relative min-h-screen">
        {children}
      </body>
    </html>
  );
}
