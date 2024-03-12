import React, { useMemo } from "react";
import Scripting, { ScriptingType } from "../Scripting";
import { Project } from "./projects";
import Link from "next/link";
import { TbWindowMaximize } from "react-icons/tb";
import Image from "next/image";

export default function Project({
  title,
  description,
  image,
  color,
  scripts,
  url,
}: Project) {
  const titleHtml = useMemo(() => {
    return title.replace(/<color>(.*?)<\/color>/g, (_, text) => {
      return `<span style="color: ${color}; font-weight: bold">${text}</span>`;
    });
  }, [title, color]);

  return (
    <div className="flex bg-dark min-h-[450px] text-white border-[10px] border-dark-light relative z-10">
      <Link
        href={url}
        target="_blank"
        className="min-w-[367px] relative group overflow-hidden"
      >
        <div className="full-absolute z-20 p-10 flex-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          <p className="text-3xl mb-12 font-light flex-center gap-2">
            Visitar
            <TbWindowMaximize size={30} />
          </p>
        </div>
        <div className="full-absolute transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 z-10" />
        <Image
          className="transition-transform duration-300 group-hover:scale-105"
          src={image}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between px-16 pt-16 pb-10">
        <div>
          <h3
            className="text-5xl mb-12 font-light"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          <p className="text-[12px]">{description}</p>
        </div>
        <div className="w-full flex justify-between">
          <Link
            href={url}
            target="_blank"
            className="flex-center gap-2 items-center text-2xl hover:underline"
            style={{
              color: color,
            }}
          >
            {url}
            <TbWindowMaximize size={30} />
          </Link>
          <div className="flex gap-2">
            {scripts.map((script) => (
              <Scripting key={script} type={script} width={35} height={35} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
