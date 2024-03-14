import type { Metadata } from "next";
import { DM_Serif_Text, Inter, Roboto } from "next/font/google";

import Providers from "@/provider";

import "./globals.css";
import "swiper/css";

export const metadata: Metadata = {
  title:
    "Merlin Tecnologia - Desenvolvimento de Software e Consultoria em TI em Jaraguá do Sul",
  description:
    "Merlin Tecnologia oferece soluções de software personalizadas para empresas. Nossa equipe especializada desenvolve ferramentas adaptadas às necessidades específicas de cada negócio. Contate-nos para descobrir como podemos ajudar a impulsionar o seu sucesso.",
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
