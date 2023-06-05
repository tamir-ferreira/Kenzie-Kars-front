import { useState } from "react";
import { mockFilter } from "../mocks/filter";

export const FilterHome = () => {
  const [brand, setBrand] = useState<null | string>();
  const [model, setModel] = useState<null | string>();
  const [color, setColor] = useState<null | string>();
  const [year, setYear] = useState<null | string>();
  const [fuel, setFuel] = useState<null | string>();
  const [km, setKm] = useState<null | string>();
  const models = mockFilter.filter((model) => model.brand === brand);
  const colors = models.filter((models) => models.model === model);
  const years = colors.filter((models) => models.color === color);
  const combs = years.filter((models) => models.year === year);
  const kilomers = combs.filter((models) => models.fuel === fuel);

  const minKm =
    km === "min" && kilomers.sort((a, b) => a.kilometers - b.kilometers);

  const maxKm =
    km === "max" && kilomers.sort((a, b) => a.kilometers + b.kilometers);

  return (
    <aside>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">Marca</h2>
        <ul className="ml-10">
          {mockFilter.map((cars, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-heading-6-500 text-grey-3"
                onClick={() => setBrand(cars.brand)}
              >
                {cars.brand}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">Modelo</h2>
        <ul className="ml-10">
          {models.length
            ? models.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setModel(cars.model)}
                  >
                    {cars.model}
                  </li>
                );
              })
            : mockFilter.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setModel(cars.model)}
                  >
                    {cars.model}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">Cor</h2>
        <ul className="ml-10">
          {colors.length
            ? colors.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setColor(cars.color)}
                  >
                    {cars.color}
                  </li>
                );
              })
            : mockFilter.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setColor(cars.color)}
                  >
                    {cars.color}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">Ano</h2>
        <ul className="ml-10">
          {years.length
            ? years.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setYear(cars.year)}
                  >
                    {cars.year}
                  </li>
                );
              })
            : mockFilter.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setYear(cars.year)}
                  >
                    {cars.year}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">Combustível</h2>
        <ul className="ml-10">
          {combs.length
            ? combs.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setFuel(cars.fuel)}
                  >
                    {cars.fuel}
                  </li>
                );
              })
            : mockFilter.map((cars, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer text-heading-6-500 text-grey-3"
                    onClick={() => setFuel(cars.fuel)}
                  >
                    {cars.fuel}
                  </li>
                );
              })}
        </ul>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">KM</h2>
        <div>
          <button className="bg-grey-3 btn-" onClick={() => setKm("min")}>
            Minimo
          </button>
          <button onClick={() => setKm("max")}>Maximo</button>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-heading-4-600 mb-4 ml-8">Preço</h2>
        <div>
          <button>Minimo</button>
          <button>Maximo</button>
        </div>
      </div>
    </aside>
  );
};
