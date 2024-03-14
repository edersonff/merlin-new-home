import Image from "next/image";
import Link from "next/link";
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
    <Link
      href="#"
      className="flex-1 min-h-[474px] px-10 py-7 relative group overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="z-[-1] group-hover:scale-105 transition-transform duration-300 object-cover"
      />

      <div className="full-absolute -z-[1] bg-gradient-to-b from-dark/80 via-dark/0 to-dark/0" />
      <div className="full-absolute -z-[1] bg-gradient-to-t from-dark/80 via-dark/0 to-dark/0" />

      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-neutral-200 text-[14px] uppercase">{subtitle}</p>
          <h3 className="font-extrabold text-3xl text-white">{title}</h3>
        </div>
        <p className="text-[10px] text-neutral-200">{children}</p>
      </div>
    </Link>
  );
}
