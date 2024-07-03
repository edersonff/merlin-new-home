import { ScriptingType } from "../Scripting";

export type Project = {
  title: string;
  description: string;
  image: string;
  color: string;
  scripts: ScriptingType[];
  url: string;
};

export const projects: Project[] = [
  {
    title: "Desenvolvimento Plataforma <color>Zap Auto</color>",
    description:
      "Software para automação de mensagens no WhatsApp, utilizando modelo de IA para responder mensagens automaticamente.",
      image:
        "/img/mockups/04.webp",
      color: "#05D658",
    scripts: ["tailwind", "typescript", "nextjs", "postgresql", "cloud"],
    url: "https://zapauto.com.br",
  },
  {
    title: "Criação do Software <color>Alarc Tools</color>",
    description:
      "Plataforma Web criada para gerenciar e automatizar levantamento de preço de entrega de produtos do Mercado Livre por parte de vendedores.",
    image:
      "/img/mockups/03.webp",
    color: "#0D7CDE",
    scripts: ["tailwind", "typescript", "nextjs", "postgresql", "heroku"],
    url: "https://tools.alarc.com.br",
  },
  {
    title: "Homepage <color>Merlin Tech</color>",
    description:
      "Site institucional para o setor de tecnologia da empresa Merlin, utilizado para receber contatos por email.",
      image:
        "/img/mockups/02.webp",
      color: "#47236C",
    scripts: ["tailwind", "typescript", "nextjs", "vercel"],
    url: "https://tech.merlin.app.br",
  },
  {
    title: "Homepage da <color>Alarc</color>",
    description:
      "Site institucional da empresa Alarc, utilizado internamente para apresentar os serviços da empresa. Utiliza um sistema de blog para postar novidades e artigos.",
    image: "/img/mockups/01.webp",
    color: "#94CB5E",
    scripts: ["tailwind", "typescript", "nextjs", "vercel"],
    url: "https://alarc.com.br",
  },
];
