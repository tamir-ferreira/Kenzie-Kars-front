import logo from "../../public/images/logo.svg";
import { Button } from "./Button";
import { useState } from "react";

export const Header = () => {
  const [logged, setLogged] = useState(true);
  const [menuPreferences, setMenuPreferences] = useState(false);

  return (
    <header className="h-20 px-15 bg-grey-10 border-b border-grey-6 flex items-center justify-center">
      <div className="container h-full flex items-center justify-between">
        <img src={logo} alt="logotipo" />
        <nav className="h-full flex items-center gap-11 pl-11 border-l-2 border-grey-6 relative">
          {logged ? (
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setMenuPreferences(!menuPreferences)}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-2 text-white-fixed">
                <span>SL</span>
              </div>
              <h4 className="text-grey-2">Samuel Leão</h4>
            </div>
          ) : (
            <>
              <h3 className="text-body-1-600 text-grey-2 cursor-pointer">
                Fazer Login
              </h3>
              <Button btnColor="btn-outline-2" btnSize="btn-big">
                Cadastrar
              </Button>
            </>
          )}
          {menuPreferences && (
            <div className="w-50 p-5 gap-4 flex bg-grey-9 rounded flex-col shadow-menu-profile absolute top-16 left-6 animate-menu">
              <ul className="gap-4 flex flex-col">
                <li className="text-grey-2 cursor-pointer">Editar Perfil</li>
                <li className="text-grey-2 cursor-pointer">Editar Endereço</li>
                <li className="text-grey-2 cursor-pointer">Meus Anúncios</li>
                <li className="text-grey-2 cursor-pointer">Sair</li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
