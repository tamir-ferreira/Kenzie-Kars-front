import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoginData } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import useMedia from "use-media";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserProviderValue {
  isMobile: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  logged: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iLogin {
  token: string;
  userId: string;
}

interface iError {
  message: string;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isSeller, setIsSeller] = useState(true);
  const [logged, setLogged] = useState(true);
  const isMobile = useMedia({ maxWidth: "640px" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      localStorage.removeItem("@USER");
      setLogged(false);
      //navigate("/");
      return;
    }
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLogged(false);
  }, []);

  const login = async (data: LoginData) => {
    try {
      setLogged(true);
      const res = await api.post<iLogin>("/login", data);
      const { token } = res.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      localStorage.setItem("@TOKEN", token);

      navigate("/profile");
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
    } finally {
      setLogged(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem("@TOKEN");
    setLogged(false);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        isMobile,
        setLogged,
        logged,
        login,
        logout,
        isSeller,
        setIsSeller,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
