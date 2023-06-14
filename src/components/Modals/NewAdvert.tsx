import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { Select } from "../Select";
import { getBrands, getModelsByBrand } from "../../services/requests";

// interface Model {
//   name: string;
// }

interface Model {
  id?: string;
  brand?: string;
  name?: string;
  fuel?: number;
  value?: number;
  year?: string;
}

export const NewAdvert = () => {
  const [inputs, setInputs] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<Model>();

  useEffect(() => {
    const loadCars = async () => {
      const cars = await getBrands();
      const carBrands = Object.keys(cars);
      setBrands(carBrands);
      // console.log(cars);
    };

    loadCars();
  }, []);

  const updateSelectedBrand = async (brand: string) => {
    setSelectedBrand(brand);
    const findModels = await getModelsByBrand(brand);

    setModels(findModels);
    // console.log(findModels);
  };

  const updateSelectedModel = async (model: Model) => {
    // console.log(model);
    // console.log(models);
    const findModel = models.find((car) => {
      return car.name == model;
    });
    setSelectedModel(findModel);

    // console.log(findModel);
  };

  const addInput = (): void => {
    if (inputs.length <= 5) {
      setInputs([...inputs, ""]);
    }
  };

  return (
    <>
      <h3 className="text-body-2-500 mb-6">Informações do veículo</h3>
      <Select label="Marca" name="marca" handleSelect={updateSelectedBrand}>
        <>
          {brands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand.charAt(0).toUpperCase() + brand.slice(1)}
              </option>
            );
          })}
        </>
      </Select>
      <Select
        label="Modelo"
        name="modelo"
        handleSelect={updateSelectedModel}
        disabled={!models.length}
      >
        <>
          {/* <option value="teste">teste</option>; */}
          {models &&
            models.map((model, index) => {
              return (
                <option key={index} value={model.name}>
                  {model.name.charAt(0).toUpperCase() + model.name.slice(1)}
                </option>
              );
            })}
        </>
      </Select>
      <div className="flex gap-3.5">
        <Input label="Ano" type="text" value={selectedModel && selectedModel.year} disabled></Input>
        <Input
          label="Combustível"
          type="text"
          value={
            selectedModel &&
            (selectedModel.fuel === 1 ? "Flex" : selectedModel.fuel === 2 ? "Elétrico" : "Hibrido")
          }
        ></Input>
      </div>
      <div className="flex gap-3.5">
        <Input label="Quilometragem" placeholder="digite a quilometragem" type="text"></Input>
        <Input label="Cor" placeholder="digite a cor" type="text"></Input>
      </div>
      <div className="flex gap-3.5">
        <Input label="Preço tabela FIPE" placeholder=" " type="text"></Input>
        <Input label="Preço" placeholder="digite o preço" type="text"></Input>
      </div>
      <TextArea label="Descrição" placeholder="digite a descrição" cols={10} rows={3} />
      <Input
        label="Imagem da capa"
        placeholder="digite o caminho para a imagem"
        type="text"
      ></Input>
      {inputs.map((_, index) => (
        <Input
          key={index}
          label={`${index + 1}ª Imagem da galeria`}
          placeholder="digite o caminho para a imagem"
          type="text"
        ></Input>
      ))}
      <Button
        btnSize="btn-medium"
        btnColor="btn-brand-opacity"
        attributes="tex"
        handleClick={addInput}
      >
        Adicionar campo para imagem da galeria
      </Button>
      <div className="flex justify-end gap-3 mt-10">
        <Button btnSize="btn-big" btnColor="btn-negative">
          Cancelar
        </Button>
        <Button btnSize="btn-big" btnColor="btn-brand-disable" attributes="px-10">
          Criar anúncio
        </Button>
      </div>
    </>
  );
};
