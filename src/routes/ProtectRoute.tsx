import { Outlet, useParams } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";
import { iUser } from "../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { setCarsProfile, setLogged } = useAuth();

  const token = localStorage.getItem("@TOKEN");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (!token) {
    setCarsProfile(false);
    setLogged(false);
  }

  const { id } = useParams();

  const userString = localStorage.getItem("@USER");
  const user: iUser = userString ? JSON.parse(userString) : null;

  if (user !== undefined && user !== null) {
    if (user.id !== Number(id)) {
      setCarsProfile(false);
    }
  }

  return <Outlet />;
};
