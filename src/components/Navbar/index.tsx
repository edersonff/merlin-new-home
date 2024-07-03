import Image from "next/image";
import Link from "next/link";
import React from "react";
import { links } from "./links";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { ButtonOutlined } from "../Button";
import Social from "../Social";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="content flex justify-between items-center py-6">
        <div className="flex-center">
          <Link href="/">
            <Image
              src="/merlin/logo.svg"
              alt="Merlin Logo"
              width={30}
              height={30}
            />
          </Link>
          <hr className="w-[2px] ml-11 mr-6 h-8 inline-block bg-neutral-800" />
          <div className="flex small:hidden">
            {links.map((link) => (
              <Nav key={link.label} {...link} />
            ))}
          </div>
        </div>
        <div className="flex-center gap-main">
          <div className="flex gap-2">
            <Social
              type="facebook"
              label="+55 11 99999-9999"
              href="tel:+5511999999999"
            />
            <Social
              type="instagram"
              label="merlin@merlin.com.br"
              href="mailto:merlin@merlin.com.br"
            />
          </div>
          <ButtonOutlined>Contate-nos</ButtonOutlined>
        </div>
      </div>
    </div>
  );
}

export function NavbarMobile({
  isOpen,
  setNavbar,
}: {
  isOpen: boolean;
  setNavbar: (value: boolean) => void;
}) {
  return (
    <div className="xl-lg:hidden ">
      <motion.div
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          type: "tween",
        }}
        className={
          "fixed top-0 left-0 w-full bg-white z-50 pl-4 pr-12 flex flex-col gap-2 overflow-hidden transition " +
          (isOpen ? "h-[100vh] py-10" : "h-0")
        }
      >
        <GrClose
          onClick={() => setNavbar(false)}
          className="text-3xl cursor-pointer absolute top-10 right-4 text-black"
        />

        <Link href="/" className="px-4 py-4 mb-8">
          <Image src="/logo-black.svg" alt="Logo" width={120} height={120} />
        </Link>
        {links.map((page) => (
          <Link
            onClick={() => setNavbar(false)}
            key={page.url}
            className="px-4 py-4 text-3xl rounded-full text-gray-800 transition-all bg-white active:x-[bg-gray-100,text-primary] clickable"
            href={page.url}
          >
            {page.label}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
