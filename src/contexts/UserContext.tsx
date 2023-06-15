import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoginData } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import useMedia from "use-media";
import { RegisterData } from "../schemas/registerSchema";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserProviderValue {
  isMobile: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setUserStatus: React.Dispatch<React.SetStateAction<boolean>>;
  logged: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  createUser: (data: RegisterData) => void;
  userStatus: boolean;
  user: iUser;
}

interface iAddress {
  street: string;
  complement: string | null | undefined;
  zipCode: string;
  number: number | null | undefined;
  city: string;
  state: string;
}

interface iUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  birthdate: Date | string;
  description: string | null;
  admin: boolean;
  seller: boolean;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  address: iAddress;
}

interface iLogin {
  token: string;
}

interface iError {
  message: string;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [logged, setLogged] = useState(true);
  const [user, setUser] = useState<iUser>({} as iUser);
  const [userStatus, setUserStatus] = useState(false);
  const isMobile = useMedia({ maxWidth: "640px" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      localStorage.removeItem("@USER");
      localStorage.removeItem("@TOKEN");
      setLogged(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setLogged(true);
  }, []);

  const createUser = async (data: RegisterData) => {
    try {
      const strParts = data.birthdate.split("-");
      const fDate = strParts[2] + "/" + strParts[1] + "/" + strParts[0];
      const fPhone = data.phone.replace(/\s/g, "").replace(/\D/g, "");
      const fCpf = data.cpf.replace(/\s/g, "").replace(/\D/g, "");
      const fZipCode = data.zipCode.replace(/\s/g, "").replace(/\D/g, "");
      let fAddressNum: null | number = null;

      if (data.number === "") {
        fAddressNum = null;
      } else {
        fAddressNum = Number(data.number);
      }

      const addressObj = {
        city: data.city,
        complement: data.complement,
        state: data.state,
        street: data.street,
        zipCode: fZipCode,
        number: fAddressNum,
      };

      const userObj = {
        name: data.name,
        email: data.email,
        cpf: fCpf,
        password: data.password,
        phone: fPhone,
        seller: userStatus,
        birthdate: fDate,
        description: data.description,
      };

      const reqBody = { ...userObj, address: addressObj };
      console.log(reqBody);

      await api.post<iUser>("/users", reqBody);

      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
    }
  };

  const login = async (data: LoginData) => {
    try {
      setLogged(true);
      const res = await api.post<iLogin>("/login", data);
      const { token } = res.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const dbUsers = await api.get<iUser[]>("/users");

      const loggedUser = dbUsers.data.filter(
        (user: iUser) => user.email === data.email
      )[0];

      setUser(loggedUser);
      localStorage.setItem("@USER", JSON.stringify(loggedUser));
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
    localStorage.removeItem("@USER");
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
        user,
        createUser,
        setUserStatus,
        userStatus,
      }}>
      {children}
    </UserContext.Provider>
  );
};
