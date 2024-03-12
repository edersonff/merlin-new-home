import Image from "next/image";
import React from "react";

export default function Service({
  subtitle,
  title,
  children,
  image,
}: {
  subtitle: string;
  title: string;
  children: React.ReactNode;
  image: string;
}) {
  return (
    <div className="flex-1 min-h-[474px] px-10 py-7 relative">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-[-1]"
      />

      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-neutral-200 text-[14px] uppercase">{subtitle}</p>
          <h3 className="font-extrabold text-3xl text-white">{title}</h3>
        </div>
        <p className="text-[10px] text-neutral-200">{children}</p>
      </div>
    </div>
  );
}
