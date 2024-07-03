import Button, { ButtonOutlined } from "@/components/Button";
import Input, { InputTextarea } from "@/components/Input";
import React from "react";

export default function Forms() {
  return (
    <div className="py-36 w-full bg-dark-light">
      <div className="content flex small:flex-col">
        <div className="flex-1 flex flex-col gap-10">
          <div>
            <p className="text-[16px] text-neutral-200 mb-1">
              Tem um projeto em vista
            </p>
            <h3 className="text-white text-3xl font-extrabold">
              Solicite uma cotação
            </h3>
          </div>
          <div className="flex flex-col gap-main">
            <div className="flex gap-main">
              <Input placeholder="Nome" name="name" required />
              <Input placeholder="Empresa" name="company" required />
            </div>

            <div className="flex gap-main">
              <Input placeholder="Email" name="email" required />
              <Input placeholder="Telefone" name="phone" required />
            </div>

            <InputTextarea placeholder="Mensagem" name="message" required />
          </div>

          <div className="flex gap-main mt-2.5 small:flex-col">
            <Button className="big:flex-1">Mandar Mensagem</Button>
            <ButtonOutlined className="min-w-main-2">Cancelar</ButtonOutlined>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
