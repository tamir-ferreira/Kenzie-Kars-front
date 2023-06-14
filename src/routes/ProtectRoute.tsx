import { useAuth } from "../hooks/userAuth";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { logged } = useAuth();
  const token = localStorage.getItem("@TOKEN");
  if (logged) {
    return null;
  }
  return token ? <Outlet /> : <Navigate to={"/"} />;
};
