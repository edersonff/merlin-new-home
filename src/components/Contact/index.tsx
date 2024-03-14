import React from "react";
import { IconType } from "react-icons";

export default function Contact({
  Icon,
  title,
  description,
  children,
}: {
  Icon: IconType;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col  items-center gap-main text-center text-white mb-8">
        <div className="p-2 rounded-main bg-dark-light">
          <Icon className="text-5xl" />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{title}</h3>
          <p className="text-neutral-300">{description}</p>
        </div>
      </div>
      <div className="w-full flex-center">{children}</div>
    </>
  );
}
