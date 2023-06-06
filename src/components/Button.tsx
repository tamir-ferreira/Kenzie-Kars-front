import { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  btnSize: string;
  btnColor: string;
  handleClick?: () => void;
}

export const Button = ({
  children,
  btnSize,
  btnColor,
  handleClick,
}: BtnProps) => {
  return (
    <button className={`${btnSize} ${btnColor}`} onClick={handleClick}>
      {children}
    </button>
  );
};
