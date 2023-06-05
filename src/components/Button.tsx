import { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  btnSize: string;
  btnColor: string;
}

export const Button = ({ children, btnSize, btnColor }: BtnProps) => {
  return <button className={`${btnSize} ${btnColor}`}>{children}</button>;
};
