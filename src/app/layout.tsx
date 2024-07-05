import Providers from "@/provider";

import "./globals.css";

import "swiper/css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Eficiência e Simplicidade",
    default: "Merlin - Eficiência e Simplicidade",
  },
  description:
    "Com simplicidade e eficiência criamos softwares modernos e diretos ao ponto, para melhor atender a sua empresa . Entre em contato para descobrir o como podemos lhe ajudar.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
      pt: "/",
      "pt-BR": "/",
    },
  },

  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: {
      template: "%s - Eficiência e Simplicidade",
      default: "Merlin - Eficiência e Simplicidade",
    },
    description:
      "Com simplicidade e eficiência criamos softwares modernos e diretos ao ponto, para melhor atender a sua empresa . Entre em contato para descobrir o como podemos lhe ajudar.",
    images: [
      {
        url: "/og/image.jpg",
        width: 1280,
        height: 720,
        alt: "Merlin Tecnologia",
      },
    ],
  },

  applicationName: "Merlin",
  themeColor: "#6938D9",
  referrer: "origin-when-cross-origin",
  creator: "Merlin",
  keywords: [
    "merlin",
    "aplicativos",
    "software",
    "plataforma",
    "web",
    "mobile",
    "desenvolvimento",
    "tecnologia",
    "react",
    "next",
    "node",
    "typescript",
    "javascript",
    "api",
    "graphql",
    "rest",
    "fullstack",
    "frontend",
    "backend",
    "design",
    "ux",
  ],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  twitter: {
    site: "@merlin.app",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Providers>{children}</Providers>
    </html>
  );
}
