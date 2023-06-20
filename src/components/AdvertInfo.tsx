import { useAuth } from "../hooks/userAuth";
import { Button } from "./Button";

export const AdvertInfo = () => {
  const { advert } = useAuth();

  const price = +advert.price;
  return (
    <div className="width-advert-info bg-grey-10 p-7 rounded-lg sm:py-7 sm:px-11">
      <div className="flex flex-col">
        <h2 className="font-medium text-xl mb-11 text-grey-1">
          {advert.model}
        </h2>
        <div className="flex justify-between flex-wrap gap-8">
          <div className="flex gap-3">
            <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
              {advert.year}
            </span>
            <span className="bg-brand-4 text-brand-1 font-medium text-sm px-2 py-1 rounded">
              {`${advert.mileage} KM`}
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
