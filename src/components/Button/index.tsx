import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";

export default function Button({
  children,
  className,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverClass = useMemo(() => {
    if (isHovered) {
      return "transform -translate-y-1";
    }
    return "";
  }, [isHovered]);

  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      className={`${className} ${hoverClass} bg-primary text-center text-sm small:text-xs text-white unselectable font-extrabold rounded-full py-[10px] px-8 transition-all duration-200`}
      {...props}
    >
      {children}
    </a>
  );
}

export function ButtonOutlined({
  children,
  className,
  ...props
}: PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverClass = useMemo(() => {
    if (isHovered) {
      return "transform -translate-y-1";
    }
    return "";
  }, [isHovered]);

  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      className={`${className} ${hoverClass} bg-primary/0 text-center text-sm small:x-[text-xs,px-4] unselectable text-primary border font-extrabold border-primary rounded-full py-[10px] px-8 transition-all duration-200 hover:x-[bg-primary/100,text-white]`}
      {...props}
    >
      {children}
    </a>
  );
}
