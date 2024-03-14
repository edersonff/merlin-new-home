import React, { ButtonHTMLAttributes, useMemo, useState } from "react";

export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverClass = useMemo(() => {
    if (isHovered) {
      return "transform -translate-y-1";
    }
    return "";
  }, [isHovered]);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} ${hoverClass} bg-primary text-sm text-white unselectable font-extrabold rounded-full py-[10px] px-8 transition-all duration-200`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonOutlined({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverClass = useMemo(() => {
    if (isHovered) {
      return "transform -translate-y-1";
    }
    return "";
  }, [isHovered]);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${className} ${hoverClass} bg-primary/0 text-sm unselectable text-primary border font-extrabold border-primary rounded-full py-[10px] px-8 transition-all duration-200 hover:x-[bg-primary/100,text-white]`}
      {...props}
    >
      {children}
    </button>
  );
}
