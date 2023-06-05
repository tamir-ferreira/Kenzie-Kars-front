import { ReactNode, useState } from "react";

interface CardProps {
  car: {
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
  };
}

export const Cards = ({ car }: CardProps) => {
  const [carsProfile, setCarsProfile] = useState(true);
  const [active, setActive] = useState(true);
  const [discount, setDiscount] = useState(true);
  const {
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
  } = car;

  return (
    <li className="flex flex-col items-start pt-0 h-[350px] w-[312px] border-none mb-9">
      <div className="flex justify-center items-center bg-grey-7 w-full mb-4 relative">
        <img src={img} alt="carro" className="" />
        {discount && (
          <span className="bg-random-7 w-4 h-7 text-white-fixed text-sm font-medium border-none flex items-center justify-center rounded-sm absolute top-0 right-0">
            $
          </span>
        )}
        {carsProfile && (
          <>
            {active ? (
              <span className="flex items-center top-3 left-4 h-6 px-2 bg-brand-1 text-body-2-500 text-white-fixed absolute">
                Ativo
              </span>
            ) : (
              <span className="flex items-center top-3 left-4 h-6 px-2 bg-grey-4 text-body-2-500 text-white-fixed absolute">
                Inativo
              </span>
            )}
          </>
        )}
      </div>
      <div className="flex mb-4">
        <h2 className="font-lexend text-base font-semibold">{`${brand} - ${model}`}</h2>
      </div>
      <p className="ellipsis-limiter text-grey-2 text-sm text-body-2-400 leading-6 text-start mb-4 max-w-full">
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
        <span className="font-lexend text-grey-1 font-medium text-base">{`R$ ${value}`}</span>
      </div>
      {children}
    </li>
  );
};
