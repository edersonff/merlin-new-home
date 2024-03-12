import Image from "next/image";
import Link from "next/link";
import React from "react";
import { links } from "./links";
import Nav from "./Nav";
import { ButtonOutlined } from "../Button";
import Social from "../Social";

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
          <div className="flex">
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
