import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/userAuth";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  const { setLogged } = useAuth();

  useEffect(() => {
    setLogged(false);
  }, [setLogged]);

  return (
    <>
      <Header />
      <main className="bg-grey-7 mt-14 h-[79.3vh] w-full flex justify-center items-center">
        <form className="bg-white-fixed sm:w-[412px] sm:h-[542px] h-3/4 w-5/6 py-11 px-12 rounded">
          <h1 className="text-heading-5-500 mb-8">Login</h1>
          <Input label="Email" placeholder="Digitar email" type="email" />
          <Input label="Senha" placeholder="Digitar senha" type="passowrd" />
          <div className="flex justify-end items-center mb-5">
            <button className="border-none bg-transparent text-grey-2 text-body-2-500">
              Esqueci minha senha
            </button>
          </div>
          <Button btnColor="btn-brand-1" btnSize="btn-big">
            Fazer login
          </Button>
          <div className="mt-6 flex justify-center items-center mb-6">
            <Link to="/register" className="text-grey-2 text-body-2-400 ">
              Ainda não tem cadastro
            </Link>
          </div>
          <Button btnColor="btn-brand-1" btnSize="btn-big">
            Cadastrar
          </Button>
        </form>
      </main>

      <Footer />
    </>
  );
};
