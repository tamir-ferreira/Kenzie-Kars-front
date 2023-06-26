import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { LoginData } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import useMedia from "use-media";
import { RegisterData } from "../schemas/registerSchema";
import { NewAdvertData } from "../schemas/newAdvertSchema";
import { toast } from "react-toastify";
import { SendEmailData } from "../schemas/sendEmailSchema";
import { EditProfileData } from "../schemas/editProfileSchema";
import { EditAddressData } from "../schemas/editAddressSchema";
import { UpdateAdvertData } from "../schemas/editAdvertSchema";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserProviderValue {
  isMobile: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setUserStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setAdvertsStatus: React.Dispatch<React.SetStateAction<boolean>>;
  logged: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  createUser: (data: RegisterData) => void;
  userStatus: boolean;
  advertsStatus: boolean;
  user: iUser;
  // isSeller: boolean;
  // setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  getAllAdverts: () => Promise<iAdverts[] | undefined>;
  adverts: iAdverts[];
  setAdvert: React.Dispatch<React.SetStateAction<iAdverts>>;
  advert: iAdverts;
  newAdvertSubmit: (data: NewAdvertData) => void;
  advertIsOpen: boolean;
  editAdvertIsOpen: boolean;
  setAdvertIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditAdvertIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCarsProfile: React.Dispatch<React.SetStateAction<boolean>>;
  carsProfile: boolean;
  currentUser: iUser;
  currentUserAdverts: iAdverts[];
  setCurrentUserAdverts: React.Dispatch<React.SetStateAction<iAdverts[]>>;
  getParamInfo: (id: string) => Promise<void>;
  globalLoading: boolean;
  showPass: boolean;
  setShowPass: React.Dispatch<React.SetStateAction<boolean>>;
  isRegisterModalOpen: boolean;
  toggleRegisterModal: () => void;
  isCreateAdvertSuccessModalOpen: boolean;
  toggleCreateAdvertSuccessModal: () => void;
  isResetPasswordModalOpen: boolean;
  toggleResetPasswordModal: () => void;
  isEditProfileModalOpen: boolean;
  toggleEditProfileModal: () => void;
  isEditAddressModalOpen: boolean;
  toggleEditAddressModal: () => void;
  updateUser: (data: EditProfileData, id: number) => void;
  deleteUser: (id: number) => void;
  updateAddress: (data: EditAddressData, id: number) => void;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  sendEmail: (email: SendEmailData) => void;
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setAdverts: React.Dispatch<React.SetStateAction<iAdverts[]>>;
  setIsCar: React.Dispatch<React.SetStateAction<iAdverts>>;
  isCar: iAdverts;
  updateAdvertSubmit: (data: UpdateAdvertData) => Promise<void>;
  deleteAdverts: () => Promise<void>;
}

interface iAddress {
  id: number;
  street: string;
  complement?: string | null | undefined;
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

export interface iError {
  message: string;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isCreateAdvertSuccessModalOpen, setIsCreateAdvertSuccessModalOpen] =
    useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isEditAddressModalOpen, setIsEditAddressModalOpen] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [carsProfile, setCarsProfile] = useState(true);
  // const [isSeller, setIsSeller] = useState(false);
  const [logged, setLogged] = useState(true);
  const [user, setUser] = useState<iUser>({} as iUser);
  const [adverts, setAdverts] = useState<iAdverts[]>([] as iAdverts[]);
  const [advert, setAdvert] = useState<iAdverts>({} as iAdverts);
  const [userStatus, setUserStatus] = useState(false);
  const [advertsStatus, setAdvertsStatus] = useState(false);
  const [advertIsOpen, setAdvertIsOpen] = useState(false);
  const [editAdvertIsOpen, setEditAdvertIsOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [currentUser, setCurrentUser] = useState({} as iUser);
  const [currentUserAdverts, setCurrentUserAdverts] = useState<iAdverts[]>([]);
  const [reload, setReload] = useState(false);
  const isMobile = useMedia({ maxWidth: "640px" });
  const [isCar, setIsCar] = useState<iAdverts>({} as iAdverts);
  const navigate = useNavigate();
  //window.scrollTo(0, 0);

  const toggleRegisterModal = () =>
    setIsRegisterModalOpen(!isRegisterModalOpen);

  const toggleCreateAdvertSuccessModal = () =>
    setIsCreateAdvertSuccessModalOpen(!isCreateAdvertSuccessModalOpen);

  const toggleResetPasswordModal = () =>
    setIsResetPasswordModalOpen(!isResetPasswordModalOpen);

  const toggleEditProfileModal = () =>
    setIsEditProfileModalOpen(!isEditProfileModalOpen);

  const toggleEditAddressModal = () =>
    setIsEditAddressModalOpen(!isEditAddressModalOpen);

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
      const fDate = data.year + "/" + data.month + "/" + data.day;
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
      toggleRegisterModal();
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
  };

  const getAllAdverts = async () => {
    try {
      setGlobalLoading(true);
      const { data } = await api.get<iAdverts[]>(`/adverts`);
      setAdverts(data);
      return data;
    } catch (error) {
      setGlobalLoading(false);
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
    } finally {
      setGlobalLoading(false);
    }
  };

  const login = async (data: LoginData) => {
    try {
      setGlobalLoading(true);
      const res = await api.post<iLogin>("/login", data);
      const { token } = res.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const dbUsers = await api.get<iUser[]>("/users");

      const loggedUser = dbUsers.data.filter(
        (user: iUser) => user.email === data.email
      )[0];

      const formattedUser = {
        ...loggedUser,
        birthdate: loggedUser.birthdate.toLocaleString().replaceAll("-", "/"),
      };

      setUser(formattedUser);
      localStorage.setItem("@USER", JSON.stringify(formattedUser));
      localStorage.setItem("@TOKEN", token);

      setLogged(true);

      if (formattedUser.seller) {
        // setIsSeller(true);
        navigate(`/profile/${formattedUser.id}`);
      } else navigate(`/`);
    } catch (error) {
      setGlobalLoading(false);
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error("Credenciais incorretas");
    } finally {
      setGlobalLoading(false);
    }
  };

  const logout = async () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    localStorage.removeItem("@userInfo");
    localStorage.removeItem("@carInfo");
    // localStorage.removeItem("@user-color");
    setLogged(false);
    navigate("/");
  };

  const sendEmail = async (email: SendEmailData) => {
    try {
      setGlobalLoading(true);
      await api.post(`/users/resetPassword`, email);
      toast.success("Email enviado com sucesso");
      toggleResetPasswordModal();
    } catch (error) {
      setGlobalLoading(false);
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error("Email não encontrado");
    } finally {
      setGlobalLoading(false);
    }
  };

  const updateUser = async (data: EditProfileData, id: number) => {
    try {
      const fDate = data.year + "/" + data.month + "/" + data.day;
      const fPhone = data.phone.replace(/\s/g, "").replace(/\D/g, "");
      const fCpf = data.cpf.replace(/\s/g, "").replace(/\D/g, "");
      await api.patch(`/users/${id}`, data);
      const formattedData = {
        ...data,
        birthdate: fDate,
        phone: fPhone,
        cpf: fCpf,
      };
      const userData = { ...user, ...formattedData };
      setUser(userData);
      setCurrentUser(userData);
      localStorage.setItem("@USER", JSON.stringify(userData));
      toast.success("Usuário atualizado com sucesso");
      toggleEditProfileModal();
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      toast.success("Usuário deletado com sucesso");
      toggleEditProfileModal();
      logout();
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
  };

  const updateAddress = async (data: EditAddressData, id: number) => {
    try {
      const fZipCode = data.zipCode.replace(/\s/g, "").replace(/\D/g, "");
      let fAddressNum: null | number = null;

      if (data.number === "") {
        fAddressNum = null;
      } else {
        fAddressNum = Number(data.number);
      }
      const addressObj = {
        ...data,
        id: Number(user.address.id),
        number: fAddressNum,
        zipcode: fZipCode,
      };

      await api.patch(`/addresses/${id}`, addressObj);
      const userData = { ...user, address: addressObj };
      setUser(userData);
      setCurrentUser(userData);
      localStorage.setItem("@USER", JSON.stringify(userData));
      toast.success("Endereço atualizado com sucesso");
      toggleEditAddressModal();
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
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
      toggleCreateAdvertSuccessModal();
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
  };
  const updateAdvertSubmit = async (data: UpdateAdvertData) => {
    try {
      const userString = localStorage.getItem("@USER");
      const user: iUser = userString ? JSON.parse(userString) : null;

      const advertObj = {
        brand: data.brand ? data.brand : isCar.brand,
        model: data.model ? data.model : isCar.model,
        year: data.year ? Number(data.year) : Number(isCar.year),
        fuel: data.fuel ? data.fuel : isCar.fuel,
        mileage: data.mileage ? Number(data.mileage) : Number(isCar.mileage),
        fipe_price: data.fipe_price ? data.fipe_price : isCar.fipe_price,
        price: data.price ? Number(data.price) : Number(isCar.price),
        description: data.description ? data.description : isCar.description,
        cover_image: data.cover_image ? data.cover_image : isCar.cover_image,
        is_active: !advertsStatus,
      };
      await api.patch<UpdateAdvertData>(`/adverts/${isCar.id}`, advertObj);
      getParamInfo(String(user.id));
      setEditAdvertIsOpen(!editAdvertIsOpen);
      //toggleCreateAdvertSuccessModal();
    } catch (error) {
      console.log(error);

      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
    }
  };

  const deleteAdverts = async () => {
    try {
      const userString = localStorage.getItem("@USER");
      const user: iUser = userString ? JSON.parse(userString) : null;
      await api.delete(`/adverts/${isCar.id}`);
      toast.success("Anúncio deletado com sucesso");
      getParamInfo(String(user.id));
      setEditAdvertIsOpen(!editAdvertIsOpen);
    } catch (error) {
      const currentError = error as AxiosError<iError>;
      console.error(currentError.message);
      toast.error(currentError.response?.data.message);
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
        // isSeller,
        // setIsSeller,
        getAllAdverts,
        adverts,
        setAdvert,
        advert,
        newAdvertSubmit,
        advertIsOpen,
        setAdvertIsOpen,
        setCarsProfile,
        showPass,
        setShowPass,
        carsProfile,
        currentUser,
        currentUserAdverts,
        getParamInfo,
        globalLoading,
        isRegisterModalOpen,
        toggleRegisterModal,
        isCreateAdvertSuccessModalOpen,
        toggleCreateAdvertSuccessModal,
        isResetPasswordModalOpen,
        toggleResetPasswordModal,
        reload,
        setReload,
        sendEmail,
        setCurrentUserAdverts,
        updateUser,
        deleteUser,
        updateAddress,
        isEditProfileModalOpen,
        toggleEditProfileModal,
        isEditAddressModalOpen,
        toggleEditAddressModal,
        setGlobalLoading,
        setAdverts,
        advertsStatus,
        setAdvertsStatus,
        editAdvertIsOpen,
        setEditAdvertIsOpen,
        isCar,
        setIsCar,
        updateAdvertSubmit,
        deleteAdverts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
