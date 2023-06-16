import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/userAuth";

export const ProtectedRoutes = () => {
  const { setIsSeller, advert, setCarsProfile } = useAuth();

  const token = localStorage.getItem("@TOKEN");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (!token) {
    setIsSeller(false);
    setCarsProfile(false);
  }

  const id = JSON.parse(localStorage.getItem("@USER")!);

  if (id !== undefined && id !== null) {
    if (id.id !== advert.user.id) {
      console.log("Passando aqio");
      setCarsProfile(true);
      setIsSeller(false);
    }
  }

  return <Outlet />;
};
