import { createContext } from "react";
import useMedia from "use-media";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserProviderValue {
  isMobile: boolean;
}

export const UserContext = createContext({} as UserProviderValue);

export const UserProvider = ({ children }: UserProviderProps) => {
  const isMobile = useMedia({ maxWidth: "640px" });

  return <UserContext.Provider value={{ isMobile }}>{children}</UserContext.Provider>;
};
