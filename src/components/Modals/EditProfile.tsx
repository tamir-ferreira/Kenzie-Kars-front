import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/userAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditProfileData,
  editProfileSchema,
} from "../../schemas/editProfileSchema";

export const EditProfile = () => {
  const { toggleEditProfileModal, updateUser, deleteUser, user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileData>({
    resolver: zodResolver(editProfileSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        updateUser(data, user.id);
      })}>
      <p className="body-2-500 mb-6">Informações pessoais</p>
      <Input
        label="Nome"
        placeholder="Ex: Nome Sobrenome"
        defaultValue={user.name}
        type="text"
        register={register("name")}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        placeholder="Ex: email@exemplo.com"
        defaultValue={user.email}
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="CPF"
        placeholder="000.000.000-00"
        defaultValue={user.cpf}
        type="text"
        register={register("cpf")}
        error={errors.cpf?.message}
      />
      <Input
        label="Celular"
        placeholder="(DDD) 90000-0000"
        defaultValue={user.phone}
        type="tel"
        register={register("phone")}
        error={errors.phone?.message}
      />
      <Input
        label="Data de nascimento"
        placeholder="00/00/00"
        defaultValue={user.birthdate + ""}
        type="date"
        register={register("birthdate")}
        error={errors.birthdate?.message}
      />
      <TextArea
        label="Descrição"
        cols={2}
        rows={2}
        placeholder="Digitar descrição"
        defaultValue={user.description + ""}
        register={register("description")}
        error={errors.description?.message}></TextArea>
      <div className="flex justify-end gap-3 mt-3">
        <Button
          type="button"
          btnSize="btn-medium"
          btnColor="btn-negative"
          handleClick={() => toggleEditProfileModal()}>
          Cancelar
        </Button>

        <Button
          type="button"
          btnSize="btn-medium"
          btnColor={"btn-alert"}
          handleClick={() => deleteUser(user.id)}
          attributes=" text-alert-1">
          Excluir Perfil
        </Button>

        <Button type="submit" btnSize="btn-medium" btnColor={"btn-brand-1"}>
          Salvar alterações
        </Button>
      </div>
    </form>
  );
};
