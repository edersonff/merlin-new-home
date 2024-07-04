import { products } from "@/data/products";

export const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Sobre",
    url: "#sobre",
  },
  {
    label: "Produtos",
    url: "#projetos",
    dropdown: products,
  },
  {
    label: "Serviços",
    url: "#serviços",
  },
  {
    label: "Recursos",
    url: "/#portifolio",
  },
];
