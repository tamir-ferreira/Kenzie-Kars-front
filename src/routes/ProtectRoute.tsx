import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/userAuth";
import { Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { logged } = useAuth();

  if (logged) {
    return <Loading />;
  }
  return <Outlet />;
};
