import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { UserInitials } from "./UserInitials";
import { useAuth } from "../hooks/userAuth";

interface iAdverts {
  car: {
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
  };
  seller?: boolean;
}

export const Cards = ({ car, seller }: iAdverts) => {
  const [discount, setDiscount] = useState(false);
  const { user, setAdvert, carsProfile } = useAuth();
  const price = +car.price;

  return (
    <Link to={`/product/${car.id}`}>
      <li
        className="flex flex-col justify-between items-start pt-0 h-[356px] w-[312px] group mb-9 cursor-pointer"
        onClick={() => setAdvert(car)}
      >
        <div className="flex justify-center items-center bg-grey-7 w-full h-[152px] relative border-2 border-transparent group-hover:border-brand-1 group-hover:border-solid ">
          <img
            src={car.cover_image}
            alt="carro"
            className="object-contain w-full h-full"
          />
          {user && (
            <>
              {discount && (
                <span className="bg-random-7 w-4 h-7 text-white-fixed text-sm font-medium border-none flex items-center justify-center rounded-sm absolute top-0 right-0">
                  $
                </span>
              )}
              {carsProfile && (
                <>
                  {car.is_active ? (
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
            </>
          )}
        </div>
        <div className="h-3/6 w-full flex flex-col justify-between">
          <div className="flex mb-4">
            <h2 className="font-lexend text-base font-semibold">{`${car.brand} - ${car.model}`}</h2>
          </div>
          <p className="ellipsis-limiter text-grey-2 text-sm text-body-2-400 leading-6 text-start mb-4 max-w-full">
            {car.description}
          </p>
          <div className="flex items-center mb-4">
            {!seller && (
              <>
                <UserInitials name={car.user.name} color={car.user.color} />
                <span className="ml-2 font-medium text-sm text-grey-2">
                  {car.user.name}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center ">
              <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
                {`${car.mileage} KM`}
              </span>
              <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded ml-3">
                {car.year}
              </span>
            </div>
            <span className="font-lexend text-grey-1 font-medium text-base">{`${price.toLocaleString(
              "pt-br",
              {
                style: "currency",
                currency: "BRL",
              }
            )}`}</span>
          </div>
          {seller && (
            <div className="flex gap-4 mt-4">
              <Button btnSize="btn-medium" btnColor="btn-outline-1">
                Editar
              </Button>
              <Button btnSize="btn-medium" btnColor="btn-outline-1">
                Ver detalhes
              </Button>
            </div>
          )}
        </div>
      </li>
    </Link>
  );
};
