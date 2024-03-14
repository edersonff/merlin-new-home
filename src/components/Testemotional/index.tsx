import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Testemotional({
  name,
  children,
  photo,
}: {
  name: string;
  children: React.ReactNode;
  photo: string;
}) {
  return (
    <div className="flex-1 relative bg-dark-light text-white rounded-main px-12 py-12">
      <div className="absolute top-0 left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0 rounded-full border-[10px] border-dark w-24 h-24 overflow-hidden">
        <Image src={photo} alt={name} fill className="object-cover" />
      </div>

      <Image
        src="/img/svg/quotation-mark.svg"
        alt="Quotation mark"
        width={50}
        height={50}
        className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
      <Image
        src="/img/svg/quotation-mark.svg"
        alt="Quotation mark"
        width={50}
        height={50}
        className="absolute bottom-0 right-0 transform rotate-180 translate-x-1/2 translate-y-1/2 z-10"
      />
      <div className="absolute left-2 bottom-0 flex gap-2 py-3 px-5 text-xl transform translate-y-1/2 rounded-full bg-dark-light border-[10px] border-dark">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <h3 className="stroke-[9px] stroke-dark mb-4 text-center text-xl font-extrabold">
        {name}
      </h3>
      <p className="text-[11px]">{children}</p>
    </div>
  );
}
