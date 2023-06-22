import { Button } from "../Button";
import { Input } from "../Input";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/userAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditAddressData,
  editAddressSchema,
} from "../../schemas/editAddressSchema";

export const EditAddress = () => {
  const { toggleEditAddressModal, user, updateAddress } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditAddressData>({
    resolver: zodResolver(editAddressSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        updateAddress(data, user.address.id);
      })}>
      <p className="body-2-500 mb-6">Informações de endereço</p>
      <Input
        label="CEP"
        placeholder="00000-000"
        type="text"
        defaultValue={user.address.zipCode}
        register={register("zipCode")}
        error={errors.zipCode?.message}
      />
      <div className="flex w-full gap-3">
        <Input
          label="Estado"
          placeholder="Digitar Estado"
          type="text"
          defaultValue={user.address.state}
          register={register("state")}
          error={errors.state?.message}
        />
        <Input
          label="Cidade"
          placeholder="Digitar cidade"
          type="text"
          defaultValue={user.address.city}
          register={register("city")}
          error={errors.city?.message}
        />
      </div>
      <Input
        label="Rua"
        placeholder="Digitar Rua"
        type="text"
        defaultValue={user.address.street}
        register={register("street")}
        error={errors.street?.message}
      />
      <div className="flex w-full gap-3">
        <Input
          label="Número"
          placeholder="Digitar número"
          type="text"
          defaultValue={
            user.address.number === null ? "" : user.address.number + ""
          }
          register={register("number")}
          error={errors.number?.message}
        />
        <Input
          label="Complemento"
          placeholder="Ex: apart 307"
          type="text"
          defaultValue={user.address.complement + ""}
          register={register("complement")}
          error={errors.complement?.message}
        />
      </div>
      <div className="flex justify-end gap-3 mt-3">
        <Button
          type="button"
          btnSize="btn-big"
          btnColor="btn-negative"
          handleClick={() => toggleEditAddressModal()}>
          Cancelar
        </Button>

        <Button
          type="submit"
          btnSize="btn-big"
          btnColor={"btn-brand-1"}
          attributes="px-10">
          Salvar alterações
        </Button>
      </div>
    </form>
  );
};
