import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mantl | Automatizare AI pentru Afaceri",
  description:
    "Automatizăm munca repetitivă din afacerea ta. Construim sisteme care preiau sarcinile pe care le faci de 10 ori pe zi.",
  openGraph: {
    title: "Mantl — Automatizăm munca repetitivă din afacerea ta",
    description: "65% din ziua ta e muncă repetitivă. Construim sisteme care o fac pentru tine. Tu te ocupi de afacere.",
    type: "website",
    locale: "ro_RO",
    siteName: "Mantl",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mantl — Automatizare AI pentru Afaceri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantl — Automatizăm munca repetitivă din afacerea ta",
    description: "65% din ziua ta e muncă repetitivă. Construim sisteme care o fac pentru tine.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${dmSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
