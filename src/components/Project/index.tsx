import React, { useMemo } from "react";
import Scripting, { ScriptingType } from "../Scripting";
import { Project as ProjectType } from "./projects";
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
}: ProjectType) {
  const titleHtml = useMemo(() => {
    return title.replace(/<color>(.*?)<\/color>/g, (_, text) => {
      return `<span style="color: ${color}; font-weight: bold">${text}</span>`;
    });
  }, [title, color]);

  return (
    <div className="flex small:flex-col bg-dark min-h-[450px] text-white border-[10px] border-dark-light relative z-10">
      <Link
        href={url}
        target="_blank"
        className="big:min-w-[367px] small:min-h-[367px] relative group overflow-hidden"
      >
        <div className="absolute-full z-20 p-10 flex-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          <p className="text-3xl mb-12 font-light flex-center gap-2">
            Visitar
            <TbWindowMaximize size={30} />
          </p>
        </div>
        <div className="absolute-full transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 z-10" />
        <Image
          className="object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
          src={image}
          fill
          alt={title}
        />
      </Link>
      <div className="flex-1 flex flex-col justify-between px-16 pt-16 small:px-8 pb-10">
        <div className="small:mb-8">
          <h3
            className="text-5xl small:text-3xl mb-12 small:mb-6 font-light"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          <p className="text-[12px] small:text-[10px]">{description}</p>
        </div>
        <div className="w-full flex small:x-[flex-col,gap-4] justify-between">
          <Link
            href={url}
            target="_blank"
            className="flex-center small:justify-start gap-2 items-center text-2xl small:text-lg hover:underline"
            style={{
              color: color,
            }}
          >
            {url}
            <TbWindowMaximize size={30} className="small:size-5" />
          </Link>
          <div className="flex gap-2">
            {scripts.map((script) => (
              <Scripting key={script} type={script} width={20} height={20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
