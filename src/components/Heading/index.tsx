import Image from "next/image";
import React from "react";

export default function Heading({
  subtitle,
  children,
  align = "left",
  white = false,
}: {
  subtitle: string;
  children: React.ReactNode;
  align?: "center" | "left";
  white?: boolean;
}) {
  if (white) {
    return (
      <div className="text-white">
        <p className="text-[15px] small:text-xs mb-2 font-semibold">
          {subtitle}
        </p>
        <h2 className="text-5xl small:text-3xl mb-7 leading-[1.2]">
          {children}
        </h2>
        <Image
          src="/img/svg/bottom-heading-white.svg"
          alt="Merlin Logo"
          width={103}
          height={12}
          className="mb-8"
        />
      </div>
    );
  }

  if (align === "center") {
    return (
      <div className="text-center">
        <p className="text-primary text-[15px] small:text-xs mb-2 font-semibold">
          {subtitle}
        </p>
        <h2 className="text-5xl small:text-3xl mb-7 leading-[1.2]">
          {children}
        </h2>
        <div className="flex-center">
          <Image
            src="/img/svg/bottom-heading.svg"
            alt="Merlin Logo"
            width={103}
            height={12}
            className="mb-8"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-primary text-[15px] small:text-xs mb-2 font-semibold">
        {subtitle}
      </p>
      <h2 className="text-5xl small:text-3xl mb-7 leading-[1.2]">{children}</h2>
      <Image
        src="/img/svg/bottom-heading.svg"
        alt="Merlin Logo"
        width={103}
        height={12}
        className="mb-8"
      />
    </div>
  );
}
