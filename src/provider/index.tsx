import React from "react";
import FontProvider from "./font";
import SwiperProvider from "./swiper";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FontProvider>
        <SwiperProvider>{children}</SwiperProvider>
      </FontProvider>
    </>
  );
}
