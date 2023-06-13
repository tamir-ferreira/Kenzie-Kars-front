import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/userAuth";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { RLForm } from "../components/RLForm";

export const Login = () => {
  const { setLogged } = useAuth();

  useEffect(() => {
    setLogged(false);
  }, [setLogged]);

  return (
    <>
      <Header />
      <RLForm>
        <h1 className="text-heading-5-500 mb-8">Login</h1>
        <Input label="Email" placeholder="Digitar email" type="email" />
        <Input label="Senha" placeholder="Digitar senha" type="password" />
        <div className="flex justify-end items-center mb-5">
          <button className="border-none bg-transparent text-grey-2 text-body-2-500">
            Esqueci minha senha
          </button>
        </div>
        <Button btnColor="btn-brand-1" btnSize="btn-big" attributes="w-full">
          Fazer login
        </Button>
        <div className="mt-6 flex justify-center items-center mb-6">
          <Link to="/register" className="text-grey-2 text-body-2-400 ">
            Ainda não tem cadastro
          </Link>
        </div>
        <Button btnColor="btn-outline-2" btnSize="btn-big" attributes="w-full">
          Cadastrar
        </Button>
      </RLForm>
      <Footer />
    </>
  );
};
