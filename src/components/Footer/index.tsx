import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { links } from "../Navbar/links";

export default function Footer() {
  return (
    <footer className="content-container bg-dark text-white">
      <div className="mx-auto w-full content p-4 py-10 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 small:mb-10">
            <Link href="#" className="flex items-center">
              <Image
                src="/merlin/logo.svg"
                width={32}
                height={32}
                className="me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl small:text-lg font-semibold whitespace-nowrap ">
                Merlin
              </span>
            </Link>
          </div>
          <div className="grid small:-order-1 grid-cols-2 gap-14 sm:grid-cols-3">
            <div>
              <h2 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-200 uppercase ">
                Recursos
              </h2>
              <ul className="text-neutral-300  font-medium">
                <li className="mb-5">
                  <Link
                    href="https://flowzapp.com"
                    target="_blank"
                    className="hover:underline small:text-sm"
                  >
                    Flow Zapp
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-200 uppercase ">
                Contato
              </h2>
              <ul className="text-neutral-300  font-medium">
                <li>
                  <Link
                    href="/contact#forms"
                    className="hover:underline small:text-sm"
                  >
                    Formulário
                  </Link>
                </li>
                <li className="my-5">
                  <Link
                    href="mailto:merlin@merlin.app.br"
                    target="_blank"
                    className="hover:underline small:text-sm"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+55479996556538"
                    className="hover:underline small:text-sm"
                  >
                    Celular
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-7 small:mb-4 text-sm small:text-xs font-semibold text-neutral-200 uppercase ">
                Nós siga
              </h2>
              <ul className="text-neutral-300  font-medium">
                <li className="my-5">
                  <Link
                    href={"#"}
                    target="_blank"
                    className="hover:underline small:text-sm "
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    target="_blank"
                    className="hover:underline small:text-sm"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-neutral-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-xs">
            © {2022}-{new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-neutral-200 hover:underline small:text-sm"
            >
              Merlin
            </Link>
            . Todos os direitos reservados.
          </p>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <SocialFooterItem type="instagram" href="#" />
            <SocialFooterItem type="facebook" href="#" />
            <SocialFooterItem type="linkedin" href="#" />
            <SocialFooterItem type="twitter" href="#" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SocialFooterItem({
  type,
  href,
}: {
  type: "facebook" | "twitter" | "instagram" | "linkedin";
  href: string;
}) {
  const Icon = useMemo(() => {
    const icons = {
      facebook: <FaFacebook />,
      twitter: <BsTwitter />,
      instagram: <BsInstagram />,
      linkedin: <FaLinkedinIn />,
    };
    return icons[type];
  }, [type]);

  return (
    <Link
      target="_blank"
      href={href}
      className="text-neutral-300 hover:text-neutral-200  ms-5"
    >
      {Icon}
      <span className="sr-only">{type} page</span>
    </Link>
  );
}
