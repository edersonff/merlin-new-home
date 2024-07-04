import Gallery from "@/components/Gallery";
import Heading from "@/components/Heading";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function Portifolio() {
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (selected > -1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  return (
    <>
      <AnimatePresence>
        {selected > -1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex-center p-10"
            onClick={() => setSelected(-1)}
          >
            <Image
              src={`/img/projects/0${selected + 1}.jpg`}
              alt="Projetos da Merlin"
              width={800}
              height={600}
              className="max-h-[90vh] max-w-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="content" id="portifolio">
        <div className="flex flex-col gap-14 text-white text-center">
          <div>
            <Heading align="center" subtitle="Conheça nossos projetos">
              <span className="font-light">
                Portfólio de <b className="font-extrabold">projetos</b>
              </span>
            </Heading>
            <div className="flex-center">
              <p className="max-w-main-6 text-[12px] small:text-[10px]">
                Conheça alguns dos nossos softwares web que foram divulgados, e
                veja como podemos ajudar você e sua empresa.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-main">
            <div className="flex gap-main min-h-[367px] small:flex-col">
              <Gallery
                src="/img/projects/01.jpg"
                alt="Projetos da Merlin"
                onClick={() => setSelected(0)}
                className="cursor-pointer"
              />
              <Gallery
                src="/img/projects/02.jpg"
                alt="Projetos da Merlin"
                onClick={() => setSelected(1)}
                className="cursor-pointer"
              />
              <Gallery
                src="/img/projects/03.jpg"
                alt="Projetos da Merlin"
                onClick={() => setSelected(2)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex gap-main min-h-[367px] small:flex-col">
              <Gallery
                src="/img/projects/04.jpg"
                alt="Projetos da Merlin"
                onClick={() => setSelected(3)}
                className="cursor-pointer"
              />
              <Gallery
                src="/img/projects/05.jpg"
                alt="Projetos da Merlin"
                onClick={() => setSelected(4)}
                className="cursor-pointer"
              />
              <Gallery
                src="/img/projects/06.jpg"
                alt="Projetos da Merlin"
                onClick={() => setSelected(5)}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
