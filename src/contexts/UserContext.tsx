import { createContext, useState } from "react";
import useMedia from "use-media";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserProviderValue {
  isMobile: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  logged: boolean;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [logged, setLogged] = useState(true);
  const isMobile = useMedia({ maxWidth: "640px" });

  return (
    <UserContext.Provider value={{ isMobile, setLogged, logged }}>
      {children}
    </UserContext.Provider>
  );
};
