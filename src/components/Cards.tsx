import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { UserInitials } from "./UserInitials";
import { useAuth } from "../hooks/userAuth";
import img from "../assets/images/mock-car.png";

interface CardProps {
  car: {
    img: string;
    brand: string;
    model: string;
    description: string;
    name: string;
    kilometer: string;
    year: string;
    value: string;
  };
  isSeller?: boolean;
}
interface iAdeverts {
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
    userId: {
      id: string;
    };
  };
}

export const Cards = ({ car }: iAdeverts) => {
  const [carsProfile, setCarsProfile] = useState(true);
  const [active, setActive] = useState(true);
  const [discount, setDiscount] = useState(true);
  const { isSeller, setAdvert } = useAuth();

  return (
    <Link to={`/product/${car.id}`}>
      <li
        className="flex flex-col items-start pt-0 min-h-[350px] min-w-[312px] w-[312px] group mb-9 cursor-pointer"
        onClick={() => setAdvert(car)}
      >
        <div className="flex justify-center items-center bg-grey-7 w-full mb-4 relative border-2 border-transparent group-hover:border-brand-1 group-hover:border-solid ">
          <img src={img} alt="carro" className="" />
          {!isSeller && (
            <>
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
            </>
          )}
        </div>
        <div className="flex mb-4">
          <h2 className="font-lexend text-base font-semibold">{`${car.brand} - ${car.model}`}</h2>
        </div>
        <p className="ellipsis-limiter text-grey-2 text-sm text-body-2-400 leading-6 text-start mb-4 max-w-full">
          {car.description}
        </p>
        <div className="flex items-center mb-4">
          {!isSeller && (
            <>
              <UserInitials name={"Antonio Rezende"} />
              <span className="ml-2 font-medium text-sm text-grey-2">
                {"Antonio Rezende"}
              </span>
            </>
          )}
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center ">
            <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
              {`${"3000000"} KM`}
            </span>
            <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded ml-3">
              {car.year}
            </span>
          </div>
          <span className="font-lexend text-grey-1 font-medium text-base">{`R$ ${car.price}`}</span>
        </div>
        {isSeller && (
          <div className="flex gap-4 mt-4">
            <Button btnSize="btn-medium" btnColor="btn-outline-1">
              Editar
            </Button>
            <Button btnSize="btn-medium" btnColor="btn-outline-1">
              Ver detalhes
            </Button>
          </div>
        )}
      </li>
    </Link>
  );
};
