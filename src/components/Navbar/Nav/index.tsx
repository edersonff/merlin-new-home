import React, { useState } from "react";
import { links } from "../links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

export default function Nav({ label, url, dropdown }: (typeof links)[0]) {
  const [isHovered, setIsHovered] = useState(false);
  const path = usePathname();
  const isActive = path === url;

  return (
    <Link
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-3 outline-[2.25px] font-semibold active:outline-dashed focus:outline-dashed hover:text-primary transition-all duration-150
      ${isActive ? "text-primary font-extrabold" : "text-neutral-800"}`}
    >
      <div className="w-full flex justify-end">
        <div
          className={
            "hr h-[2px] bg-primary transition-all duration-150 " +
            (isHovered
              ? "w-full opacity-100 transform translate-x-0"
              : "w-[0%] opacity-0 delay-200 transform translate-x-2")
          }
        />
      </div>
      <div className="flex-center gap-1 py-1.5">
        {label}
        {dropdown && <FaChevronDown className="text-sm" />}
      </div>
      <div
        className={
          "hr h-[2px] bg-primary transition-all duration-150 " +
          (isHovered
            ? "w-full opacity-100 transform -translate-x-0"
            : "w-[0%] opacity-0 delay-200 transform -translate-x-2")
        }
      />
    </Link>
  );
}
