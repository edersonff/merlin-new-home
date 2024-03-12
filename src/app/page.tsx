"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Lottie from "lottie-react";
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

export const about = [
  {
    title: "Missão",
    description:
      "Officiis enim at aut in dolorum at. Voluptate veniam molestias minus alias praesentium maxime magni. Assumenda rerum laborum vel quia molestias qui vero accusamus. Commodi totam non rem aut.Repudiandae laboriosam sint tempora est aliquam officiis voluptatum qui aspernatur",
  },
  {
    title: "Visão",
    description:
      "Officiis enim at aut in dolorum at. Voluptate veniam molestias minus alias praesentium maxime magni. Assumenda rerum laborum vel quia molestias qui vero accusamus. Commodi totam non rem aut.Repudiandae laboriosam sint tempora est aliquam officiis voluptatum qui aspernatur",
  },
  {
    title: "Valores",
    description:
      "Officiis enim at aut in dolorum at. Voluptate veniam molestias minus alias praesentium maxime magni. Assumenda rerum laborum vel quia molestias qui vero accusamus. Commodi totam non rem aut.Repudiandae laboriosam sint tempora est aliquam officiis voluptatum qui aspernatur",
  },
];

export const testemonials = [
  {
    name: "John Doe",
    description:
      "Et non nobis illum sed a repellat qui porro occaecati. Deserunt ut eos iure. Voluptatem deleniti blanditiis ab. Nesciunt fuga quam voluptatem quisquam nulla. Quasi ea neque.Perspiciatis dolorem iure. Vitae consectetur quaerat exercitationem numquam deserunt est et qui cum. Est voluptas quo voluptatem possimus vero quo est. Molestiae corporis",
    photo: "https://randomuser.me/api/portraits/med/men/36.jpg",
  },
  {
    name: "John Doe",
    description:
      "Et non nobis illum sed a repellat qui porro occaecati. Deserunt ut eos iure. Voluptatem deleniti blanditiis ab. Nesciunt fuga quam voluptatem quisquam nulla. Quasi ea neque.Perspiciatis dolorem iure. Vitae consectetur quaerat exercitationem numquam deserunt est et qui cum. Est voluptas quo voluptatem possimus vero quo est. Molestiae corporis",
    photo: "https://randomuser.me/api/portraits/med/men/35.jpg",
  },
  {
    name: "John Doe",
    description:
      "Et non nobis illum sed a repellat qui porro occaecati. Deserunt ut eos iure. Voluptatem deleniti blanditiis ab. Nesciunt fuga quam voluptatem quisquam nulla. Quasi ea neque.Perspiciatis dolorem iure. Vitae consectetur quaerat exercitationem numquam deserunt est et qui cum. Est voluptas quo voluptatem possimus vero quo est. Molestiae corporis",
    photo: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-white to-violet-200">
        <Navbar />
        <div className="pb-32 pt-12 flex">
          <div className="content flex w-full gap-main">
            <div className="flex-1 flex-center min-w-main-5">
              <div>
                <h1 className="font-extrabold text-7xl mb-7">
                  Aplicativos e <span className="text-primary">serviços</span>
                </h1>
                <p className="text-[11px] mb-16">
                  Crie trabalhos incríveis em praticamente todos os seus
                  dispositivos – da área de trabalho à Web – usando as
                  ferramentas certas para sua casa e para sua empresa.
                </p>
                <div className="flex gap-main">
                  <Button className="flex-1">Conheça nossos serviços</Button>
                  <ButtonOutlined className="min-w-main-2">
                    Educação
                  </ButtonOutlined>
                </div>
              </div>
            </div>
            <Lottie
              animationData={hero}
              className="transform scale-x-[-1] max-w-[650px] w-full"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <main>
        <div className="w-full bg-secondary text-white">
          <div className="py-[70px] flex gap-main content">
            <h2 className="text-2xl leading-[135%] min-w-main-3">
              <b>Tecnologias</b>
              <span className="font-light block">Usadas Na Merlin</span>
            </h2>
            {["html", "css", "sass", "git", "json", "npm"].map(
              (script, index) => (
                <ScriptingWhite
                  key={index}
                  type={script as ScriptingType}
                  width={50}
                  height={50}
                />
              )
            )}
            <BiPlus className="text-5xl" />
          </div>
        </div>

        <div className="w-full py-36">
          <div className="content flex gap-[100px]">
            <div className="flex-center py-20">
              <div className="flex-1">
                <Heading subtitle="Sobre nós">
                  <b className="font-extrabold">
                    Acreditamos que a<br />
                    <span className="font-light">Simplicidade</span> é a Chave
                  </b>
                </Heading>
                <p className="mb-16 text-[12px]">
                  Crie trabalhos incríveis em praticamente todos os seus
                  dispositivos – da área de trabalho à Web – usando as
                  ferramentas certas para sua casa e para sua empresa. Crie
                  trabalhos incríveis em praticamente todos os seus dispositivos
                  – da área de trabalho à Web – usando as ferramentas certas
                  para sua casa e para sua empresa.
                </p>
                <ButtonOutlined>Vamos-lá!</ButtonOutlined>
              </div>
            </div>
            <div className="min-w-[466px] relative">
              <div className="w-[144px] h-[144px] rounded-full absolute z-10 bg-secondary flex-center border-[12px] border-white p-1 top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <p className="text-white">
                  Desde <b>2022</b>
                </p>
              </div>
              <Image
                src="/img/hero/office.jpg"
                alt="Merlin Hero"
                layout="fill"
                objectFit="cover"
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
              className="full-absolute object-cover grayscale"
            >
              <source src="/img/banner/project.mp4" type="video/mp4" />
            </video>

            <div className="full-absolute bg-gradient-to-b from-transparent to-dark-light" />

            <div>
              <div className="content relative z-10 text-white text-center">
                <p className="font-bold">Nossos projetos</p>
                <h2 className="text-8xl font-extralight tracking-[40px] -mt-2">
                  Inovação
                </h2>
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
          <div className="content flex gap-main">
            {about.map((item, index) => (
              <div
                key={index}
                className="flex-1 rounded-main bg-dark-light text-white px-8 pt-[50px] pb-11"
              >
                <h3 className="text-4xl mb-6 font-extrabold">{item.title}</h3>
                <p className="text-[12px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="hidden">Nossos serviços</h2>

        <div className="w-full relative">
          <Image
            src="/img/services/tools.jpg"
            alt="Serviço de criação de ferramentas da Merlin"
            layout="fill"
            objectFit="cover"
            className="z-[-1]"
          />
          <div className="content py-32 text-white">
            <div className="w-2/3">
              <h2 className="text-[64px] mb-7 leading-[100%] font-light">
                <b className="font-extrabold block">Soluções e Ferramentas</b>
                Para projetos
              </h2>
              <p className="text-[12px] mb-12">
                Crie trabalhos incríveis em praticamente todos os seus
                dispositivos – da área de trabalho à Web – usando as ferramentas
                certas para
              </p>
              <Button>Quero conhecer</Button>
            </div>
          </div>
        </div>
        <div className="flex">
          <Service
            subtitle="Desenvolvimento Web"
            title="Plataformas Digitais e Aplicações"
            image="/img/services/mobile.jpg"
          >
            Crie trabalhos incríveis em praticamente todos os seus dispositivos
            – da área de trabalho à Web – usando as ferramentas certas para
          </Service>
          <Service
            subtitle="Desenvolvimento Web"
            title="Plataformas Digitais e Aplicações"
            image="/img/services/web.jpg"
          >
            Crie trabalhos incríveis em praticamente todos os seus dispositivos
            – da área de trabalho à Web – usando as ferramentas certas para
          </Service>
          <Service
            subtitle="Desenvolvimento Web"
            title="Plataformas Digitais e Aplicações"
            image="/img/services/desktop.jpg"
          >
            Crie trabalhos incríveis em praticamente todos os seus dispositivos
            – da área de trabalho à Web – usando as ferramentas certas para
          </Service>
          <Service
            subtitle="Desenvolvimento Web"
            title="Plataformas Digitais e Aplicações"
            image="/img/services/design.jpg"
          >
            Crie trabalhos incríveis em praticamente todos os seus dispositivos
            – da área de trabalho à Web – usando as ferramentas certas para
          </Service>
        </div>

        <div className="py-32 bg-dark">
          <div className="content">
            <div className="flex flex-col gap-14 text-white text-center">
              <div>
                <Heading align="center" subtitle="Conheça nossos projetos">
                  <span className="font-light">
                    Portfólio de <b className="font-extrabold">projetos</b>
                  </span>
                </Heading>
                <div className="flex-center">
                  <p className="max-w-main-6 text-[12px]">
                    Crie trabalhos incríveis em praticamente todos os seus
                    dispositivos – da área de trabalho à Web – usando as
                    ferramentas certas para sua casa e para sua empresa.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-main">
                <div className="flex gap-main min-h-[367px]">
                  <Image
                    src="https://cobra.art.br/wp-content/uploads/2023/10/Cobra-Design-Apresentacao-Redes-HS_01.png"
                    alt="Projetos da Merlin"
                    width={300}
                    height={300}
                    className="aspect-square flex-1"
                  />
                  <Image
                    src="https://cobra.art.br/wp-content/uploads/2023/10/Cobra-Design-Apresentacao-Redes-HS_02.png"
                    alt="Projetos da Merlin"
                    width={300}
                    height={300}
                    className="aspect-square flex-1"
                  />
                  <Image
                    src="https://cobra.art.br/wp-content/uploads/2023/10/Cobra-Design-Apresentacao-Redes-HS_03.png"
                    alt="Projetos da Merlin"
                    width={300}
                    height={300}
                    className="aspect-square flex-1"
                  />
                </div>
                <div className="flex gap-main min-h-[367px]">
                  <Image
                    src="https://cobra.art.br/wp-content/uploads/2023/04/Cobra-Design-Apresentacao-Clube-556_01-1.png"
                    alt="Projetos da Merlin"
                    width={300}
                    height={300}
                    className="aspect-square flex-1"
                  />
                  <Image
                    src="https://cobra.art.br/wp-content/uploads/2023/04/Cobra-Design-Apresentacao-Clube-556_02-1.png"
                    alt="Projetos da Merlin"
                    width={300}
                    height={300}
                    className="aspect-square flex-1"
                  />
                  <Image
                    src="https://cobra.art.br/wp-content/uploads/2023/04/Cobra-Design-Apresentacao-Clube-556_03-1.png"
                    alt="Projetos da Merlin"
                    width={300}
                    height={300}
                    className="aspect-square flex-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-primary to-secondary py-[108px]">
          <div className="content flex justify-between items-center gap-10">
            <div className="flex flex-1 flex-col justify-between">
              <Heading subtitle="Sobre Nós" white={true}>
                <b className="font-extrabold leading-[1]">
                  Soluções e Ferramentas Para projetos
                </b>
              </Heading>
              <div>
                <Button className="min-w-main-3 bg-white text-primary">
                  Quero Conhecer
                </Button>
              </div>
            </div>
            <div className="text-white flex-1">
              <h3 className="mb-6 font-bold text-[16px]">
                Laudantium reprehenderit dolore ea reprehenderit reiciendis ut
                aspernatur. Sint natus mollitia qui.
              </h3>
              <p className="text-[12px]">
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

        <div className="pt-40 pb-48 bg-dark">
          <div className="content">
            <div className="flex flex-col gap-32 text-white">
              <div>
                <Heading align="center" subtitle="Saiba mais sobre nós">
                  <span className="font-light">
                    Testemunhos de <b className="font-extrabold">clientes</b>
                  </span>
                </Heading>
                <div className="flex-center text-center">
                  <p className="max-w-main-6 text-[12px]">
                    Crie trabalhos incríveis em praticamente todos os seus
                    dispositivos – da área de trabalho à Web – usando as
                    ferramentas certas para sua casa e para sua empresa.
                  </p>
                </div>
              </div>
              <div className="flex gap-main">
                {testemonials.map(({ description, name, photo }, index) => (
                  <Testemotional key={index} name={name} photo={photo}>
                    {description}
                  </Testemotional>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r to-primary from-secondary py-[108px]">
          <div className="content flex justify-between items-center gap-10">
            <div className="flex flex-1 flex-col justify-between">
              <Heading subtitle="Sobre Nós" white={true}>
                <b className="font-extrabold leading-[1]">
                  Soluções e Ferramentas Para projetos
                </b>
              </Heading>
              <div>
                <Button className="min-w-main-3 bg-white text-primary">
                  Quero Conhecer
                </Button>
              </div>
            </div>
            <div className="text-white flex-1">
              <h3 className="mb-6 font-bold text-[16px]">
                Laudantium reprehenderit dolore ea reprehenderit reiciendis ut
                aspernatur. Sint natus mollitia qui.
              </h3>
              <p className="text-[12px]">
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

        <Forms />
      </main>
    </>
  );
}
