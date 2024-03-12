import { products } from "@/data/products";

export const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Sobre",
    url: "/sobre",
  },
  {
    label: "Produtos",
    url: "/produtos",
    dropdown: products,
  },
  {
    label: "Serviços",
    url: "/servicos",
  },
  {
    label: "Recursos",
    url: "/recursos",
  },
];
