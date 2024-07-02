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
    image: "https://cobra.art.br/wp-content/uploads/2023/04/site-missner.jpg",
    color: "#85C6E4",
    scripts: ["tailwind", "typescript", "nextjs", "postgresql", "cloud"],
    url: "https://missner.com.br",
  },
  {
    title: "Criação do Software <color>Alarc Tools</color>",
    description:
      "Plataforma Web criada para gerenciar e automatizar levantamento de preço de entrega de produtos do Mercado Livre por parte de vendedores.",
    image:
      "https://cobra.art.br/wp-content/uploads/2023/04/nova-id-sfichips-1024x1024.jpg",
    color: "#B10002",
    scripts: ["tailwind", "typescript", "nextjs", "postgresql", "heroku"],
    url: "https://sfichips.com.br",
  },
  {
    title: "Homepage <color>Merlin Tech</color>",
    description:
      "Site institucional para o setor de tecnologia da empresa Merlin, utilizado para receber contatos por email.",
    image:
      "https://cobra.art.br/wp-content/uploads/2023/04/logo-buenos-1024x1024.jpg",
    color: "#FFF8DB",
    scripts: ["tailwind", "typescript", "nextjs", "vercel"],
    url: "https://buenosbarber.com.br",
  },
  {
    title: "Homepage da <color>Alarc</color>",
    description:
      "Site institucional para indústria 100% responsivo e 100% administravel + blog de notícias.",
    image:
      "https://cobra.art.br/wp-content/uploads/2023/04/embalagem-cookies-aminna-1024x1024.jpg",
    color: "#FFB901",
    scripts: ["tailwind", "typescript", "nextjs", "vercel"],
    url: "https://aminna.com.br",
  },
];
