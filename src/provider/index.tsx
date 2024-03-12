import React from "react";
import FontProvider from "./font";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FontProvider>{children}</FontProvider>
    </>
  );
}
