export type Product = {
  title: string;
  text: string;
  icon: string;
  link: string;
};

export type ProductList = {
  title: string;
  color: string;
  products: Product[];
};

export const products: ProductList[] = [
  {
    title: "Extensões",
    color: "bg-blue-500",
    products: [
      {
        title: "Extrair dados",
        icon: "/img/products/scrapping.svg",
        text: "Extraia dados de qualquer página web com facilidade. Com a nossa extensão, você pode extrair dados de qualquer página web com facilidade.",
        link: "/scrapping",
      },
      {
        title: "Auto-preencher Currículo",
        icon: "/img/products/curriculum.svg",
        text: "Preencha currículos automaticamente. Com a nossa extensão, você pode preencher currículos automaticamente. Preencha pela última vez e nunca mais.",
        link: "/curriculum",
      },
      {
        title: "Extração de Vídeos",
        icon: "/img/products/video.svg",
        text: "Extraia vídeos de qualquer página web com facilidade. Com a nossa extensão, você pode extrair vídeos de qualquer página web com facilidade.",
        link: "/video",
      },
      {
        title: "Desempenho de E-commerce",
        icon: "/img/products/ecommerce.svg",
        text: "Crie relatórios de desempenho de e-commerce. Com a nossa extensão, você pode criar relatórios de desempenho de e-commerce.",
        link: "/ecommerce",
      },
    ],
  },
  {
    title: "Integrações",
    color: "bg-green-500",
    products: [
      {
        title: "Checkout Transparente",
        icon: "/img/products/checkout.svg",
        text: "Com o nosso checkout transparente, você pode aumentar a conversão do seu e-commerce.",
        link: "/checkout",
      },
      {
        title: "ChatGPT e IA",
        icon: "/img/products/chat.svg",
        text: "Integre o ChatGPT e IA em seu site. Com a nossa integração, você pode integrar o ChatGPT e IA em seu site.",
        link: "/chat",
      },
      {
        title: "Facilitador WhatsApp",
        icon: "/img/products/whatsapp.svg",
        text: "Com o nosso facilitador WhatsApp, você pode aumentar a conversão do seu e-commerce.",
        link: "/whatsapp",
      },
    ],
  },
  {
    title: "APIs",
    color: "bg-yellow-500",
    products: [
      {
        title: "API de CEP",
        icon: "/img/products/cep.svg",
        text: "Com a nossa API de CEP, você pode consultar CEPs com facilidade.",
        link: "/cep",
      },
      {
        title: "API de CNPJ",
        icon: "/img/products/cnpj.svg",
        text: "Com a nossa API de CNPJ, você pode consultar CNPJs com facilidade.",
        link: "/cnpj",
      },
      {
        title: "API de CPF",
        icon: "/img/products/cpf.svg",
        text: "Com a nossa API de CPF, você pode consultar CPFs com facilidade.",
        link: "/cpf",
      },
      {
        title: "API de NFe",
        icon: "/img/products/nfe.svg",
        text: "Com a nossa API de NFe, você pode consultar NFe com facilidade.",
        link: "/nfe",
      },
    ],
  },
  {
    title: "Soluções",
    color: "bg-red-500",
    products: [
      {
        title: "Solução de E-commerce",
        icon: "/img/products/ecommerce-solution.svg",
        text: "Com a nossa solução de e-commerce, você pode aumentar a conversão do seu e-commerce.",
        link: "/ecommerce-solution",
      },
      {
        title: "Solução de ChatGPT",
        icon: "/img/products/chat-solution.svg",
        text: "Com a nossa solução de ChatGPT, você pode aumentar a conversão do seu e-commerce.",
        link: "/chat-solution",
      },
      {
        title: "Solução de WhatsApp",
        icon: "/img/products/whatsapp-solution.svg",
        text: "Com a nossa solução de WhatsApp, você pode aumentar a conversão do seu e-commerce.",
        link: "/whatsapp-solution",
      },
    ],
  },
];
