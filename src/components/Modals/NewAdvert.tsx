import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

export const NewAdvert = () => {
  const [inputs, setInputs] = useState<string[]>([]);

  const addInput = (): void => {
    if (inputs.length <= 5) {
      setInputs([...inputs, ""]);
    }
  };

  return (
    <>
      <h3 className="text-body-2-500 mb-6">Informações do veículo</h3>
      <Input label="Marca" placeholder="digite a marca" type="text"></Input>
      <Input label="Modelo" placeholder="digite o modelo" type="text"></Input>
      <div className="flex gap-3.5">
        <Input label="Ano" placeholder="digite o ano" type="text"></Input>
        <Input label="Combustível" placeholder="digite o combustível" type="text"></Input>
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
