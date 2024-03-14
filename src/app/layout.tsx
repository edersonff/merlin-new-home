import Providers from "@/provider";

import "./globals.css";

import "swiper/css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template:
      "%s - Desenvolvimento de Software e Consultoria em TI em Jaraguá do Sul",
    default:
      "Merlin Tecnologia - Desenvolvimento de Software e Consultoria em TI em Jaraguá do Sul",
  },
  description:
    "A Merlin oferece soluções de software personalizadas para empresas. Nossa equipe especializada desenvolve ferramentas adaptadas às necessidades específicas de cada negócio. Contate-nos para descobrir como podemos ajudar a impulsionar o seu sucesso.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL,
    languages: {
      pt: "/",
      en: "/en",
      "pt-BR": "/",
      "en-US": "/en",
    },
  },

  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: {
      template:
        "%s - Desenvolvimento de Software e Consultoria em TI em Jaraguá do Sul",
      default:
        "Merlin Tecnologia - Desenvolvimento de Software e Consultoria em TI em Jaraguá do Sul",
    },
    description:
      "A Merlin oferece soluções de software personalizadas para empresas. Nossa equipe especializada desenvolve ferramentas adaptadas às necessidades específicas de cada negócio. Contate-nos para descobrir como podemos ajudar a impulsionar o seu sucesso.",
    images: [
      {
        url: "/og/image.jpg",
        width: 1280,
        height: 720,
        alt: "Merlin Tecnologia",
      },
    ],
  },

  applicationName: "Merlin Tecnologia",
  themeColor: "#6938D9",
  referrer: "origin-when-cross-origin",
  creator: "Merlin Tecnologia",
  keywords: [
    "Desenvolvimento de Software",
    "Consultoria em TI",
    "Soluções de Software",
    "Software Personalizado",
    "Desenvolvimento de Aplicativos",
    "Desenvolvimento Web",
    "Desenvolvimento Mobile",
    "Consultoria em Tecnologia",
    "Empresa de Tecnologia",
    "Empresa de Software",
    "Jaraguá do Sul",
    "Santa Catarina",
    "Brasil",
    "Merlin Tecnologia",
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
