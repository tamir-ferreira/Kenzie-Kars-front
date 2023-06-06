import { useState } from "react";
import { mockFilter } from "../mocks/filter";
import { Button } from "./Button";

export const FilterHome = () => {
  const [brand, setBrand] = useState<null | string>();
  const [model, setModel] = useState<null | string>();
  const [color, setColor] = useState<null | string>();
  const [year, setYear] = useState<null | string>();
  const [fuel, setFuel] = useState<null | string>();
  // const [km, setKm] = useState<null | string>();

  console.log(model);

  const allBrands = mockFilter.map((model) => model.brand);
  const brands = allBrands.filter(function (este, i) {
    return allBrands.indexOf(este) === i;
  });

  const allModels = mockFilter.map((model) => model.model);
  const modelsExpecific = allModels.filter(function (este, i) {
    return allModels.indexOf(este) === i;
  });

  const allColors = mockFilter.map((model) => model.color);
  const colorsExpecific = allColors.filter(function (este, i) {
    return allColors.indexOf(este) === i;
  });

  const allYears = mockFilter.map((model) => model.year);
  const yearExpecific = allYears.filter(function (este, i) {
    return allYears.indexOf(este) === i;
  });

  const allFuels = mockFilter.map((model) => model.fuel);
  const fuelExpecific = allFuels.filter(function (este, i) {
    return allFuels.indexOf(este) === i;
  });

  const models = mockFilter.filter((model) => model.brand === brand);
  const justModels = models.map((model) => model.model);
  const modelInc = justModels.filter(function (este, i) {
    return justModels.indexOf(este) === i;
  });

  const colors = models.filter((models) => models.model === model);
  const justColors = colors.map((model) => model.color);
  const colorInc = justColors.filter(function (este, i) {
    return justColors.indexOf(este) === i;
  });

  const years = colors.filter((models) => models.color === color);
  const justYears = years.map((model) => model.year);
  const yearInc = justYears.filter(function (este, i) {
    return justYears.indexOf(este) === i;
  });

  const combs = years.filter((models) => models.year === year);
  const justCombs = combs.map((model) => model.fuel);
  const combInc = justCombs.filter(function (este, i) {
    return justCombs.indexOf(este) === i;
  });
  // const kilomers = combs.filter((models) => models.fuel === fuel);

  // const minKm =
  //   km === "min" && kilomers.sort((a, b) => a.kilometers - b.kilometers);

  // const maxKm =
  //   km === "max" && kilomers.sort((a, b) => a.kilometers + b.kilometers);

  const handleClick = () => {
    setBrand(null),
      setModel(null),
      setColor(null),
      setFuel(null),
      setYear(null);
    // setKm(null);
  };
  return (
    <aside>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4">Marca</h2>
        <ul className="ml-2">
          {brands.map((cars, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-heading-6-500 text-grey-3"
                onClick={() => setBrand(cars)}
              >
                {cars}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4">Modelo</h2>
        <ul className="ml-2">
          {models.length
            ? modelInc.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setModel(cars)}
                  >
                    {cars}
                  </li>
                );
              })
            : modelsExpecific.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setModel(cars)}
                  >
                    {cars}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4">Cor</h2>
        <ul className="ml-2">
          {colorInc.length
            ? colorInc.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setColor(cars)}
                  >
                    {cars}
                  </li>
                );
              })
            : colorsExpecific.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setColor(cars)}
                  >
                    {cars}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4">Ano</h2>
        <ul className="ml-2">
          {yearInc.length
            ? yearInc.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setYear(cars)}
                  >
                    {cars}
                  </li>
                );
              })
            : yearExpecific.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setYear(cars)}
                  >
                    {cars}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4">Combustível</h2>
        <ul className="ml-2">
          {combInc.length
            ? combInc.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setFuel(cars)}
                  >
                    {cars}
                  </li>
                );
              })
            : fuelExpecific.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setFuel(cars)}
                  >
                    {cars}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4">KM</h2>
        <div className="ml-2">
          <Button
            btnSize="btn-filter"
            btnColor="btn-negative"
            // onClick={() => setKm("min")}
          >
            Minimo
          </Button>

          <Button
            btnSize="btn-filter ml-6"
            btnColor="btn-negative"
            // onClick={() => setKm("max")}
          >
            Maximo
          </Button>
        </div>
      </div>
      <div className="mb-14">
        <h2 className="text-heading-4-600 mb-4">Preço</h2>
        <div className="ml-2">
          <Button btnSize="btn-filter" btnColor="btn-negative">
            Minimo
          </Button>

          <Button btnSize="btn-filter ml-6" btnColor="btn-negative">
            Maximo
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          btnSize="btn-big"
          btnColor="btn-brand-1"
          handleClick={handleClick}
        >
          Limpar filtros
        </Button>
      </div>
    </aside>
  );
};
