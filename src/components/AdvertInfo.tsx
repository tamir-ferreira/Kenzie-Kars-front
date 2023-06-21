import { useState, useEffect } from "react";
import { Button } from "./Button";
import { CardObj } from "./Cards";

export const AdvertInfo = () => {
  const [carInfo, setCarInfo] = useState({} as CardObj);

  useEffect(() => {
    const userString = localStorage.getItem("@carInfo");
    setCarInfo(userString ? JSON.parse(userString) : null);
  }, []);

  const price = +carInfo.price;
  return (
    <div className="width-advert-info bg-grey-10 p-7 rounded-lg sm:py-7 sm:px-11">
      <div className="flex flex-col">
        <h2 className="font-medium text-xl mb-11 text-grey-1">
          {carInfo.brand} {carInfo.model}
        </h2>
        <div className="flex justify-between flex-wrap gap-8">
          <div className="flex gap-3">
            <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
              {carInfo.year}
            </span>
            <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
              {`${carInfo.mileage} KM`}
            </span>
          </div>
          <p className="font-medium text-base text-grey-1">
            {price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
        <div className="mt-6">
          <Button btnSize={"btn-medium"} btnColor={"btn-brand-1"}>
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};
