"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import hero from "@/../public/lottie/hero.json";
import Button, { ButtonOutlined } from "@/components/Button";
import Project from "@/components/Project";
import Heading from "@/components/Heading";
import { projects } from "@/components/Project/projects";
import { ScriptingType, ScriptingWhite } from "@/components/Scripting";
import { BiPlus } from "react-icons/bi";
import Service from "@/components/Service";
import Testemotional from "@/components/Testemotional";
import Forms from "@/sections/forms";
import Contact from "@/components/Contact";
import { MdEmail, MdPhone, MdSupport } from "react-icons/md";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaAws,
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPhp,
  FaPython,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { Autoplay } from "swiper/modules";
import Gallery from "@/components/Gallery";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useIsSmall } from "@/hooks/useMediaQuery";
import Loading from "./loading";
import { useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const about: {
  title: string;
  description: string;
}[] = [
  {
    title: "Missão",
    description:
      "Nossa <b>principal missão</b> é criar softwares, os quais possam ser acessíveis e fáceis de utilizar por <b>empresas e pessoas</b>. Para atingir esse objetivo, utilizamos as tecnologias mais <b>recentes e eficientes</b> do mercado.",
  },
  {
    title: "Visão",
    description:
      "Acreditamos que a tecnologia está sempre em <b>constate evolução</b>, no qual, muitas vezes, pode ser difícil de acompanhar. O que poderá criar uma <b>barreira e ruído</b> na comunicação entre a software e o usuário.",
  },
  {
    title: "Valores",
    description:
      "<b>Acessibilidade e inovação</b> andando juntas. Acreditamos que a tecnologia pode ser <b>acessível e inovadora</b> ao mesmo tempo, sem a necessidade de ser complexa e difícil de utilizar.",
  },
];

const testemonials = [
  {
    name: "Ricardo Almeida",
    description:
      "Os softwares da Merlin são fáceis de usar e ajudaram a melhorar a nossa produtividade. A acessibilidade das ferramentas facilitou o treinamento da equipe, reduziu o tempo de adaptação e tornou nosso dia a dia mais eficiente",
    photo: "https://randomuser.me/api/portraits/med/men/36.jpg",
  },
  {
    name: "Fernanda Souza",
    description:
      "Os produtos da Merlin simplificaram nossa rotina com uma interface intuitiva. A acessibilidade reduziu o tempo de treinamento, aumentou a eficiência e permitiu que nossa equipe se concentrasse em tarefas mais importantes",
    photo: "https://randomuser.me/api/portraits/med/men/35.jpg",
  },
  {
    name: "João Mendes  ",
    description:
      "A simplicidade e inovação dos softwares da Merlin melhoraram nossa operação. A facilidade de uso aumentou a satisfação dos colaboradores, otimizou nossos processos diários e nos permitiu alcançar melhores resultados",
    photo: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
];

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const isSmall = useIsSmall();
  return (
    <>
      <AnimatePresence>
        {isLoading && <Loading isComponent={true} />}
      </AnimatePresence>
      <Header />
      <div className="bg-gradient-to-b from-white to-violet-200">
        <Navbar />
        <div className="pb-32 pt-12 flex">
          <div className="content flex w-full small:flex-col gap-main">
            <div className="flex-1 flex-center big:min-w-main-5">
              <div>
                <h1 className="font-extrabold text-7xl small:text-5xl mb-7">
                  Aplicativos e <span className="text-primary">serviços</span>
                </h1>
                <p className="text-[11px] mb-16">
                  Criamos trabalhos incríveis e minimalistas para praticamente
                  todos os tipos de dispositivos – de área de trabalho à Web –
                  usando as ferramentas certas para você e para sua empresa.
                </p>
                <div className="flex gap-main small:flex-col">
                  <Button className="flex-1">Conheça nossos serviços</Button>
                  <ButtonOutlined className="min-w-main-2">
                    Sobre
                  </ButtonOutlined>
                </div>
              </div>
            </div>
            {
              <Lottie
                animationData={hero}
                className="transform scale-x-[-1] max-w-[650px] w-full min-h-[512px]"
                style={{ width: "100%", height: "100%" }}
                // onDOMLoaded={() => setLoading(false)}
              />
            }
          </div>
        </div>
      </div>
      <main>
        <div className="w-full bg-secondary text-white">
          <div className="py-[70px] flex small:flex-col gap-main content">
            <h2 className="text-2xl leading-[135%] min-w-main-3 small:text-center">
              <b>Tecnologias</b>
              <span className="font-light block">Usadas Na Merlin</span>
            </h2>
            <Swiper
              spaceBetween={5}
              className="w-full"
              modules={[Autoplay]}
              slidesPerView={10}
              breakpoints={{
                1: {
                  slidesPerView: 4,
                },
                640: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 7,
                },
                1280: {
                  slidesPerView: 10,
                },
              }}
              loop
              autoplay
              navigation
            >
              {[
                FaHtml5,
                FaCss3,
                FaJs,
                FaReact,
                FaNode,
                FaJava,
                FaPython,
                FaPhp,
                FaSass,
                FaWordpress,
                FaDatabase,
                FaAws,
              ].map((Script, index) => (
                <SwiperSlide key={index}>
                  <div className="flex-center h-full">
                    <Script className="text-3xl" />
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="flex-center h-full">
                  <BiPlus className="text-3xl" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="w-full py-36">
          <div className="content flex gap-[100px] small:x-[flex-col,gap-16]">
            <div className="flex-center py-20">
              <div className="flex-1">
                <Heading subtitle="Sobre nós">
                  <b className="font-extrabold">
                    Acreditamos que a <br />
                    <span className="font-light">Simplicidade</span> é a Chave
                  </b>
                </Heading>
                <p className="mb-16 text-[12px] small:text-[10px]">
                  Temos como principal pilar a <b>simplicidade</b> e a{" "}
                  <b>facilidade</b> de uso. Acreditamos que a tecnologia deve
                  ser <b>acessível</b> & <b>facilitada</b>, assim como a
                  comunicação e a interação com o usuário. <br />
                  Desejamos que nossos produtos sejam intuitivos e <b>
                    fáceis
                  </b>{" "}
                  de usar, para que qualquer pessoa possa utilizá-los sem
                  dificuldades.
                </p>
                <ButtonOutlined>Vamos-lá!</ButtonOutlined>
              </div>
            </div>
            <div className="big:min-w-[466px] small:h-[50vh] relative">
              <div className="w-[144px] h-[144px] rounded-full absolute z-10 bg-secondary flex-center border-[12px] border-white p-1 big:top-[50%] small:left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <p className="text-white">
                  Desde <b>2022</b>
                </p>
              </div>
              <Image
                src="/img/hero/office.jpg"
                alt="Merlin Hero"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-dark-light">
          <div className="relative pt-[120px] pb-[132px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute-full object-cover grayscale"
            >
              <source src="/img/banner/project.mp4" type="video/mp4" />
            </video>

            <div className="absolute-full bg-gradient-to-b from-transparent to-dark-light" />

            <div>
              <div className="content relative z-10 text-white text-center">
                <p className="font-bold">Nossos projetos</p>
                <motion.h2
                  initial={{ opacity: 0, letterSpacing: "0px" }}
                  whileInView={{
                    opacity: 1,
                    letterSpacing: isSmall ? "10px" : "40px",
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="text-8xl small:text-5xl font-extralight tracking-[40px] -mt-2"
                >
                  Inovação
                </motion.h2>
              </div>
            </div>
          </div>

          <div>
            <div className="content pt-28 flex flex-col gap-main">
              {projects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-dark relative -mt-[225px] pt-[400px] pb-[200px] ">
          <h2 className="hidden">Sobre nós</h2>
          <div className="content flex gap-main small:flex-col">
            {about.map((item, index) => (
              <div
                key={index}
                className="flex-1 rounded-main bg-dark-light text-white px-8 pt-[50px] pb-11"
              >
                <h3 className="text-4xl mb-6 font-extrabold">{item.title}</h3>
                <p
                  className="text-[12px] small:text-[10px]"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            ))}
          </div>
        </div>

        <h2 className="hidden">Nossos serviços</h2>

        <div className="w-full relative">
          <Image
            src="/img/services/tools.jpg"
            alt="Serviço de criação de ferramentas da Merlin"
            fill
            className="z-[-1] object-cover"
          />
          <div className="content py-32 text-white">
            <div className="big:w-2/3">
              <h2 className="text-[64px] small:text-5xl mb-7 leading-[100%] font-light">
                <b className="font-extrabold block">Soluções e Ferramentas </b>
                Para projetos
              </h2>
              <p className="text-[12px] small:text-[10px] mb-12">
                Descubra nossos softwares e ferramentas que podem ajudar você e
                sua empresa a crescer e se desenvolver.
              </p>
              <Button>Quero conhecer</Button>
            </div>
          </div>
        </div>
        <div className="flex small:flex-col">
          <Service
            subtitle="Android e iOS"
            title="Aplicativos para Celulares"
            image="/img/services/mobile.jpg"
          >
            Construa aplicativos incríveis para Android e iOS, com softwares
            como React Native e Flutter
          </Service>
          <Service
            subtitle="Desenvolvimento Web"
            title="Plataformas Digitais e Aplicações"
            image="/img/services/web.jpg"
          >
            Softwares construidos para a web, com tecnologias como React,
            Next.js, Node.js e muito mais
          </Service>
          <Service
            subtitle="Desktop"
            title="Softwares para Computadores"
            image="/img/services/desktop.jpg"
          >
            Crie softwares para computadores com tecnologias como Electron e
            React
          </Service>
          <Service
            subtitle="Design e UX/UI"
            title="Concepção e Design de Projetos"
            image="/img/services/design.jpg"
          >
            Conte com nossos designers para criar interfaces incríveis e
            intuitivas
          </Service>
        </div>

        <div className="py-52 bg-dark">
          <div className="content">
            <div className="flex flex-col gap-14 text-white text-center">
              <div>
                <Heading align="center" subtitle="Conheça nossos projetos">
                  <span className="font-light">
                    Portfólio de <b className="font-extrabold">projetos</b>
                  </span>
                </Heading>
                <div className="flex-center">
                  <p className="max-w-main-6 text-[12px] small:text-[10px]">
                    Conheça alguns dos nossos softwares web que foram
                    divulgados, e veja como podemos ajudar você e sua empresa.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-main">
                <div className="flex gap-main min-h-[367px] small:flex-col">
                  <Gallery
                    src="/img/projects/01.jpg"
                    alt="Projetos da Merlin"
                  />
                  <Gallery
                    src="/img/projects/02.jpg"
                    alt="Projetos da Merlin"
                  />
                  <Gallery
                    src="/img/projects/03.jpg"
                    alt="Projetos da Merlin"
                  />
                </div>
                <div className="flex gap-main min-h-[367px] small:flex-col">
                  <Gallery
                    src="/img/projects/04.jpg"
                    alt="Projetos da Merlin"
                  />
                  <Gallery
                    src="/img/projects/05.jpg"
                    alt="Projetos da Merlin"
                  />
                  <Gallery
                    src="/img/projects/06.jpg"
                    alt="Projetos da Merlin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-primary to-secondary py-[108px]">
          <div className="content flex justify-between items-center gap-10 small:x-[flex-col,gap-16]">
            <div className="flex flex-1 flex-col justify-between">
              <Heading subtitle="Sobre Nós" white={true}>
                <b className="font-extrabold leading-[1]">
                  Soluções e Ferramentas Para projetos
                </b>
              </Heading>
              <div>
                <Button className="min-w-main-3 bg-white text-primary-important">
                  Quero Conhecer
                </Button>
              </div>
            </div>
            <div className="text-white flex-1">
              <h3 className="mb-6 font-bold text-[16px]">
                Laudantium reprehenderit dolore ea reprehenderit reiciendis ut
                aspernatur. Sint natus mollitia qui.
              </h3>
              <p className="text-[12px] small:text-[10px]">
                Et non nobis illum sed a repellat qui porro occaecati. Deserunt
                ut eos iure. Voluptatem deleniti blanditiis ab. Nesciunt fuga
                quam voluptatem quisquam nulla. Quasi ea neque. Perspiciatis
                dolorem iure. Vitae consectetur quaerat exercitationem numquam
                deserunt est et qui cum. Est voluptas quo voluptatem possimus
                vero quo est. Molestiae corporis doloribus natus molestiae quam
                dolores delectus pariatur velit. Consequatur accusamus quo a
                delectus et.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-48 pb-52 bg-dark">
          <div className="content">
            <div className="flex flex-col gap-32 text-white">
              <div>
                <Heading align="center" subtitle="Saiba mais sobre nós">
                  <span className="font-light">
                    Testemunhos de <b className="font-extrabold">clientes</b>
                  </span>
                </Heading>
                <div className="flex-center text-center">
                  <p className="max-w-main-6 text-[12px] small:text-[10px]">
                    Veja quem confiou em nós e o que eles têm a dizer sobre o
                    nosso trabalho
                  </p>
                </div>
              </div>
              <div className="flex gap-main small:x-[flex-col,gap-24]">
                {testemonials.map(({ description, name, photo }, index) => (
                  <Testemotional key={index} name={name} photo={photo}>
                    {description}
                  </Testemotional>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Forms />

        <div className="w-full bg-gradient-to-r to-primary from-secondary py-[108px]">
          <div className="content flex justify-between items-center gap-10 small:x-[flex-col,gap-16]">
            <div className="flex flex-1 flex-col justify-between">
              <Heading subtitle="Sobre Nós" white={true}>
                <b className="font-extrabold leading-[1]">
                  Soluções e Ferramentas Para projetos
                </b>
              </Heading>
              <div>
                <Button className="min-w-main-3 bg-white text-primary-important">
                  Quero Conhecer
                </Button>
              </div>
            </div>
            <div className="text-white flex-1">
              <h3 className="mb-6 font-bold text-[16px]">
                Laudantium reprehenderit dolore ea reprehenderit reiciendis ut
                aspernatur. Sint natus mollitia qui.
              </h3>
              <p className="text-[12px] small:text-[10px]">
                Et non nobis illum sed a repellat qui porro occaecati. Deserunt
                ut eos iure. Voluptatem deleniti blanditiis ab. Nesciunt fuga
                quam voluptatem quisquam nulla. Quasi ea neque. Perspiciatis
                dolorem iure. Vitae consectetur quaerat exercitationem numquam
                deserunt est et qui cum. Est voluptas quo voluptatem possimus
                vero quo est. Molestiae corporis doloribus natus molestiae quam
                dolores delectus pariatur velit. Consequatur accusamus quo a
                delectus et.
              </p>
            </div>
          </div>
        </div>

        <div className="py-40 bg-dark text-center">
          <div className="content flex gap-main small:x-[flex-col,gap-16]">
            <div className="flex-1">
              <Contact
                title="Mande um Email:"
                description="Faremos o possível para responder o mais rápido possível."
                Icon={MdEmail}
              >
                <Link
                  href="mailto:hello@merlin.com"
                  className="small:text-xs font-bold text-primary hover:underline underline-offset-4"
                >
                  hello@merlin.com
                </Link>
              </Contact>
            </div>

            <div className="flex-1">
              <Contact
                title="Ligue para nós:"
                description="Caso prefira, podemos conversar por telefone."
                Icon={MdPhone}
              >
                <Link
                  href="tel:+5511999999999"
                  className="small:text-xs font-bold text-primary hover:underline underline-offset-4"
                >
                  +55 11 99999-9999
                </Link>
              </Contact>
            </div>

            <div className="flex-1">
              <Contact
                title="Suporte:"
                description="Se houver algum problema para nos contatar, ou se precisar de ajuda."
                Icon={MdSupport}
              >
                <ButtonOutlined className="small:text-xs">
                  Centro de Ajuda
                </ButtonOutlined>
              </Contact>
            </div>
          </div>
        </div>

        <div className="py-48 relative flex-center text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute-full object-cover -z-[1]"
          >
            <source src="/img/banner/street.mp4" type="video/mp4" />
          </video>

          <div className="absolute-full bg-black/75 -z-[1]" />

          <div className="content flex flex-col text-center">
            <h2 className="text-7xl small:text-5xl mb-2.5 font-extrabold">
              Localização
            </h2>
            <h3 className="text-3xl small:text-xl mb-10">
              Bairro Rau. Willy Dorow, 141
            </h3>
            <p className="text-[12px] small:text-[10px] max-w-main-6">
              Caso precise ter um atendimento presencialmente conosco, podemos
              lhe atender aqui em Jaraguá do Sul, SC
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
