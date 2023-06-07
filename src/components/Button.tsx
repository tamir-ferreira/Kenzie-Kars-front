import { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btnSize: string;
  btnColor: string;
  attributes?: string;
  handleClick?: () => void;
}

export const Button = ({ children, btnSize, btnColor, attributes, handleClick }: BtnProps) => {
  return (
    <button className={`${btnSize} ${btnColor} ${attributes}`} onClick={handleClick}>
      {children}
    </button>
  );
};
