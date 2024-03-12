"use client";

import { DM_Serif_Text, Lato, Roboto } from "next/font/google";
import React from "react";

const roboto = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const DMSerif = DM_Serif_Text({
  weight: ["400", "400"],
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-dm-serif",
});

export default function FontProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`${roboto.variable} ${DMSerif.variable}`}>{children}</body>
  );
}
