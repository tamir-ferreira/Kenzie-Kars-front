import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  img: string;
  brand: string;
  model: string;
  description: string;
  initialName: string;
  name: string;
  kilometer: string;
  year: string;
  value: string;
}

export const Cards = ({
  children,
  img,
  brand,
  model,
  description,
  initialName,
  name,
  kilometer,
  year,
  value,
}: CardProps) => {
  return (
    <button className="flex flex-col items-start pt-0 h-[350px] w-[312px] border-none">
      <div className="flex justify-center items-center bg-grey-7 w-full mb-4 relative">
        <img src={img} alt="carro" className="" />
        <span className="bg-random-7 w-4 h-7 text-white-fixed text-sm font-medium border-none flex items-center justify-center rounde-s absolute top-0 right-0">
          $
        </span>
      </div>
      <div className="flex mb-4">
        <h2 className="text-base font-semibold text-grey-1">{brand}</h2>
        <h2 className="text-base font-semibold">{model}</h2>
      </div>
      <p className="text-grey-2 text-sm font-normal leading-6 text-start mb-4 truncate max-w-full">
        {description}
      </p>
      <div className="flex items-center mb-4">
        <div className="bg-brand-1 border rounded-full h-8 w-8 flex items-center justify-center">
          <span className="font-medium text-sm text-white-fixed">
            {initialName}
          </span>
        </div>
        <span className="ml-2 font-medium text-sm text-grey-2">{name}</span>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center ">
          <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
            {`${kilometer} KM`}
          </span>
          <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded ml-3">
            {year}
          </span>
        </div>
        <span className="text-grey-1 font-medium text-base">{`R$ ${value}`}</span>
      </div>
      {children}
    </button>
  );
};
