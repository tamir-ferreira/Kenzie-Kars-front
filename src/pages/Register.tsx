import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/userAuth";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RLForm } from "../components/RLForm";
import { TextArea } from "../components/TextArea";

export const Register = () => {
  const { setLogged } = useAuth();

  useEffect(() => {
    setLogged(false);
  }, [setLogged]);

  return (
    <>
      <Header />
      <RLForm>
        <h1 className="text-heading-5-500 mb-8">Cadastro</h1>
        <p className="body-2-500 mb-6">Informações pessoais</p>
        <Input label="Nome" placeholder="Ex: Nome Sobrenome" type="text" />
        <Input label="Email" placeholder="Ex: email@exemplo.com" type="email" />
        <Input label="CPF" placeholder="000.000.000-00" type="text" />
        <Input label="Celular" placeholder="(DDD) 90000-0000" type="tel" />
        <Input label="Data de nascimento" placeholder="00/00/00" type="date" />
        <TextArea
          label="Descrição"
          cols={2}
          rows={2}
          placeholder="Digitar descrição"></TextArea>
        <p className="body-2-500 mb-6">Informações de endereço</p>
        <Input label="CEP" placeholder="00000.000" type="text" />
        <div className="flex w-full gap-3">
          <Input label="Estado" placeholder="Digitar Estado" type="text" />
          <Input label="Cidade" placeholder="Digitar cidade" type="text" />
        </div>
        <Input label="Rua" placeholder="Digitar Rua" type="text" />
        <div className="flex w-full gap-3">
          <Input label="Número" placeholder="Digitar número" type="text" />
          <Input label="Complemento" placeholder="Ex: apart 307" type="text" />
        </div>
        <p className="body-2-500 mb-7">Tipo de conta</p>
        <div className="flex w-full gap-3 mb-7">
          <Button
            btnColor="btn-brand-1"
            btnSize="btn-medium sm:btn-big"
            attributes="w-[50%]">
            Comprador
          </Button>
          <Button
            btnColor="btn-outline-2"
            btnSize="btn-medium sm:btn-big"
            attributes="w-[50%]">
            Anunciante
          </Button>
        </div>
        <Input label="Senha" placeholder="Digitar Senha" type="password" />
        <Input
          label="Confirmar Senha"
          placeholder="Digitar Senha"
          type="password"
        />
        <Button btnColor="btn-brand-1" btnSize="btn-big" attributes="w-full">
          Finalizar cadastro
        </Button>
      </RLForm>
      <Footer />
    </>
  );
};
