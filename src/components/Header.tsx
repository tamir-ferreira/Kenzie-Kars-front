import logo from "../../public/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "./Button";
import { useState } from "react";
import { UserInitials } from "./UserInitials";

interface HeaderProps {
  isMobile: boolean;
}

export const Header = ({ isMobile }: HeaderProps) => {
  const [logged, setLogged] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="h-[10vh] w-screen px-4 bg-grey-10 border border-b-2 border-grey-6 flex items-center justify-center fixed z-10 sm:h-20 sm:px-15 ">
      <div className="container h-full flex items-center justify-between">
        <img src={logo} alt="logotipo" />
        <nav className="h-full flex items-center gap-11 pl-11 border-none border-grey-6 relative sm:border-l-2">
          {isMobile ? (
            <button
              className="flex items-center justify-center borde h-11 w-11 border-none"
              onClick={() => setOpenMenu(!openMenu)}
              aria-label={!openMenu ? "Abrir Menu" : "Fechar Menu"}
            >
              {!openMenu ? <FaBars size={20} /> : <IoClose size={25} />}
            </button>
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
              {openMenu && (
                <div className="w-50 p-5 gap-4 flex bg-grey-9 rounded flex-col shadow-menu-profile absolute top-16 left-6 animate-menu">
                  <ul className="gap-4 flex flex-col">
                    <li className="text-grey-2 cursor-pointer">Editar Perfil</li>
                    <li className="text-grey-2 cursor-pointer">Editar Endereço</li>
                    <li className="text-grey-2 cursor-pointer">Meus Anúncios</li>
                    <li className="text-grey-2 cursor-pointer">Sair</li>
                  </ul>
                </div>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
