"use client";
import React from "react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

export default function SwiperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  SwiperCore.use([Autoplay]);
  return <>{children}</>;
}
