import logo from "../../public/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "./Button";
import { useContext, useState } from "react";
import { UserInitials } from "./UserInitials";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const Header = () => {
  const [logged, setLogged] = useState(true);
  const [isSeller, setIsSeller] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const { isMobile } = useContext(UserContext);

  return (
    <header className="h-[10vh] w-screen px-4 bg-grey-9 border border-b-2 border-grey-6 flex items-center justify-center fixed z-10 sm:h-20 sm:px-15 ">
      <div className="container h-full flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="logotipo" />
        </Link>
        <nav className="h-full flex items-center gap-11 pl-11 sm:relative sm:border-grey-6 sm:border-l-2">
          {isMobile ? (
            <>
              <button
                className="flex items-center justify-center bg-white-fixed rounded-lg h-11 w-11 border-none"
                onClick={() => setOpenMenu(!openMenu)}
                aria-label={!openMenu ? "Abrir Menu" : "Fechar Menu"}
              >
                {!openMenu ? <FaBars size={20} /> : <IoClose size={25} />}
              </button>
              {openMenu && (
                <>
                  {!logged && (
                    <div className="flex flex-col gap-11 w-screen h-[184px] p-4 bg-white-fixed absolute left-0 top-16 shadow-menu-profile">
                      <h3 className="text-body-1-600 text-grey-2 cursor-pointer pt-4">
                        Fazer Login
                      </h3>
                      <Button btnSize="btn-big" btnColor="btn-Outline-2">
                        Cadastrar
                      </Button>
                    </div>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {logged ? (
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <UserInitials name="José da Silva" />
                  <h4 className="text-grey-2">José da Silva</h4>
                </div>
              ) : (
                <>
                  <h3 className="text-body-1-600 text-grey-2 cursor-pointer">Fazer Login</h3>
                  <Button btnColor="btn-outline-2" btnSize="btn-big">
                    Cadastrar
                  </Button>
                </>
              )}
            </>
          )}
          {openMenu && logged && (
            <div className="p-5 gap-4 flex bg-grey-9 rounded flex-col shadow-menu-profile absolute top-16 animate-menu left-0 sm:left-6 w-screen sm:w-50">
              <ul className="gap-4 flex flex-col">
                <li className="text-grey-2 cursor-pointer">Editar Perfil</li>
                <li className="text-grey-2 cursor-pointer">Editar Endereço</li>
                {isSeller && <li className="text-grey-2 cursor-pointer">Meus Anúncios</li>}
                <li className="text-grey-2 cursor-pointer">Sair</li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
