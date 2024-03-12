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
    title: "Desenvolvimento Site <color>Missner</color>",
    description:
      "Site institucional para indústria 100% responsivo e 100% administravel + blog de notícias.",
    image: "https://cobra.art.br/wp-content/uploads/2023/04/site-missner.jpg",
    color: "#85C6E4",
    scripts: ["html", "css", "javascript", "tailwind", "typescript"],
    url: "https://missner.com.br",
  },
  {
    title: "Identidade Visual <color>SFICHIPS</color>",
    description:
      "Site institucional para indústria 100% responsivo e 100% administravel + blog de notícias.",
    image:
      "https://cobra.art.br/wp-content/uploads/2023/04/nova-id-sfichips-1024x1024.jpg",
    color: "#B10002",
    scripts: ["html", "css", "javascript", "tailwind", "typescript"],
    url: "https://sfichips.com.br",
  },
  {
    title: "Branding Para <color>Buenos Barber</color>",
    description:
      "Site institucional para indústria 100% responsivo e 100% administravel + blog de notícias.",
    image:
      "https://cobra.art.br/wp-content/uploads/2023/04/logo-buenos-1024x1024.jpg",
    color: "#FFF8DB",
    scripts: ["html", "css", "javascript", "tailwind", "typescript"],
    url: "https://buenosbarber.com.br",
  },
  {
    title: "Desenvolvimento De <color>Embalagem Aminna</color>",
    description:
      "Site institucional para indústria 100% responsivo e 100% administravel + blog de notícias.",
    image:
      "https://cobra.art.br/wp-content/uploads/2023/04/embalagem-cookies-aminna-1024x1024.jpg",
    color: "#FFB901",
    scripts: ["html", "css", "javascript", "tailwind", "typescript"],
    url: "https://aminna.com.br",
  },
];
