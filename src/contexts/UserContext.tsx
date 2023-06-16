import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoginData } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import useMedia from "use-media";
import { RegisterData } from "../schemas/registerSchema";
import { NewAdvertData } from "../schemas/newAdvertSchema";

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
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  getAllAdverts: () => Promise<iAdverts[] | undefined>;
  adverts: iAdverts[];
  setAdvert: React.Dispatch<React.SetStateAction<iAdverts>>;
  advert: iAdverts;
  newAdvertSubmit: (data: NewAdvertData) => void;
  advertIsOpen: boolean;
  setAdvertIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCarsProfile: React.Dispatch<React.SetStateAction<boolean>>;
  carsProfile: boolean;
  currentUser: iUser;
  currentUserAdverts: iAdverts[];
  getParamInfo: (id: string) => Promise<void>;
}

interface iAddress {
  street: string;
  complement: string | null | undefined;
  zipCode: string;
  number: number | null | undefined;
  city: string;
  state: string;
}

export interface iUser {
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

export interface iAdverts {
  id: number;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: string;
  color: string;
  fipe_price: string | number;
  price: number | string;
  description?: string;
  cover_image: string;
  createdAt: string;
  updatedAt: string;
  is_active?: boolean;
  user: {
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
  };
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
  const [carsProfile, setCarsProfile] = useState(true);
  const [isSeller, setIsSeller] = useState(true);
  const [logged, setLogged] = useState(true);
  const [user, setUser] = useState<iUser>({} as iUser);
  const [adverts, setAdverts] = useState<iAdverts[]>([] as iAdverts[]);
  const [advert, setAdvert] = useState<iAdverts>({} as iAdverts);
  const [userStatus, setUserStatus] = useState(false);
  const [advertIsOpen, setAdvertIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({} as iUser);
  const [currentUserAdverts, setCurrentUserAdverts] = useState<iAdverts[]>([]);
  const isMobile = useMedia({ maxWidth: "640px" });
  const navigate = useNavigate();
  //window.scrollTo(0, 0);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userString = localStorage.getItem("@USER");
    const user: iUser = userString ? JSON.parse(userString) : null;

    if (!token) {
      localStorage.removeItem("@USER");
      localStorage.removeItem("@TOKEN");
      setLogged(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setUser(user);
    setLogged(true);
  }, []);

  const getParamInfo = async (id: string) => {
    try {
      const dbUsers = await api.get<iUser[]>("/users");
      const dbAdverts = await api.get<iAdverts[]>("/adverts");

      const user = dbUsers.data.filter(
        (elt: iUser) => elt.id === Number(id)
      )[0];
      const userAdverts = dbAdverts.data.filter(
        (elt: iAdverts) => elt.user.id === Number(id)
      );

      setCurrentUser(user);
      setCurrentUserAdverts(userAdverts);
    } catch (error) {
      console.error(error);
    }
  };

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

      await api.post<iUser>("/users", reqBody);

      navigate("/login");
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
    }
  };

  const getAllAdverts = async () => {
    try {
      const { data } = await api.get<iAdverts[]>(`/adverts`);
      setAdverts(data);
      return data;
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

      navigate(`/profile/${loggedUser.id}`);
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
    }
  };

  const logout = async () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    setLogged(false);
    navigate("/");
  };

  const newAdvertSubmit = async (data: NewAdvertData) => {
    try {
      const userString = localStorage.getItem("@USER");
      const user: iUser = userString ? JSON.parse(userString) : null;
      const advertObj = {
        ...data,
        year: Number(data.year),
        mileage: Number(data.mileage),
        price: Number(data.price),
      };

      await api.post<NewAdvertData>("/adverts", advertObj);
      getParamInfo(String(user.id));
      setAdvertIsOpen(!advertIsOpen);
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
    }
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
        isSeller,
        setIsSeller,
        getAllAdverts,
        adverts,
        setAdvert,
        advert,
        newAdvertSubmit,
        advertIsOpen,
        setAdvertIsOpen,
        setCarsProfile,
        carsProfile,
        currentUser,
        currentUserAdverts,
        getParamInfo,
      }}>
      {children}
    </UserContext.Provider>
  );
};
