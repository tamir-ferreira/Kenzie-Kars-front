import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";

export const ProtectedRoutes = () => {
  const { logged, setIsSeller } = useAuth();
  const token = localStorage.getItem("@TOKEN");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id = JSON.parse(localStorage.getItem("@USER")!);
  console.log(id.id);

  // if (logged) {
  //   return null;
  // }
  // Verificar se o ID do usuário logado é o mesmo do usuário que tem anúncio
  // ID do usuário virá do state no momento do login
  // ID do usuário que tem anúncio virá de um state no momento que clicar no UserCard
  if (!token) {
    setIsSeller(false);
  }
  return <Outlet />;
};
