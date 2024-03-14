import Image, { ImageProps } from "next/image";
import React from "react";

export default function Gallery({
  src,
  ...props
}: {
  width?: number;
  height?: number;
} & ImageProps) {
  return (
    <div className="flex-1 overflow-hidden group">
      <Image
        src={src}
        {...props}
        width={300}
        height={300}
        className="aspect-square group-hover:scale-110 transition-all duration-100 ease-in-out object-cover w-full h-full"
      />
    </div>
  );
}
