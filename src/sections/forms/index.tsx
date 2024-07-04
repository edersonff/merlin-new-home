import Button, { ButtonOutlined } from "@/components/Button";
import Input, { InputTextarea } from "@/components/Input";
import { contactService } from "@/services/contact";
import { ContactForm } from "@/services/contact/types";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import mail from "@/../public/lottie/mail.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Forms() {
  const [seeding, setSeeding] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  async function onSubmit() {
    const data = getValues();

    if (!data.email || !data.message || !data.name || !data.phone) {
      return;
    }

    setSeeding(true);

    setTimeout(() => {
      setSeeding(false);
      reset();
      formRef.current && formRef.current.reset();
    }, 8000);

    await contactService.send(data);
  }

  return (
    <section className="py-36 w-full bg-dark-light" id="mensagem">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="content flex small:flex-col gap-10 "
      >
        <div className="flex-1 flex flex-col gap-10">
          {seeding ? (
            <div className="flex-center min-h-[500px]">
              <Lottie animationData={mail} />
            </div>
          ) : (
            <>
              <div>
                <p className="text-[16px] text-neutral-200 mb-1">
                  Tem um projeto em vista
                </p>
                <h3 className="text-white text-3xl font-extrabold">
                  Solicite uma cotação
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-main">
                  <Input
                    placeholder="Nome"
                    required
                    {...register("name", { required: true })}
                    onChange={(e) => setValue("name", e.target.value)}
                  />
                  <Input
                    placeholder="Empresa"
                    {...register("company", { required: false })}
                    onChange={(e) => setValue("company", e.target.value)}
                  />
                </div>

                <div className="flex gap-main">
                  <Input
                    placeholder="Email"
                    required
                    {...register("email", { required: true })}
                    onChange={(e) => setValue("email", e.target.value)}
                  />
                  <Input
                    placeholder="Telefone"
                    required
                    {...register("phone", { required: true })}
                    onChange={(e) => setValue("phone", e.target.value)}
                  />
                </div>

                <InputTextarea
                  placeholder="Mensagem"
                  required
                  {...register("message", { required: true })}
                  onChange={(e) => setValue("message", e.target.value)}
                />
              </div>

              <div className="flex gap-main mt-2.5 small:flex-col">
                <Button onClick={handleSubmit(onSubmit)} className="big:flex-1">
                  Mandar Mensagem
                </Button>
                <ButtonOutlined
                  onClick={() => {
                    formRef.current && formRef.current.reset();
                    reset();
                  }}
                  className="min-w-main-2"
                >
                  Cancelar
                </ButtonOutlined>
              </div>
            </>
          )}
        </div>
        <div className="flex-1 text-white small:hidden">
          <div className="big:ml-[10%]">
            <p className="text-[14px] small:text-[12px] uppercase text-neutral-400">
              Entre em contato
            </p>
            <h3 className="text-3xl font-bold mb-5 uppercase">Email</h3>
            <div className="mb-6  small:text-xs">
              <h4 className="text-neutral-400 -mb-1">Solicite contato:</h4>
              <p className="font-bold">contato@merlin.app.br</p>
            </div>
            <div>
              <h4 className="text-neutral-400 -mb-1">
                Suporte técnico ou financeiro:
              </h4>
              <p className="font-bold">financeiro@merlin.app.br</p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
