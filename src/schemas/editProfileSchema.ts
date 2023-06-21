import { z } from "zod";

export const editProfileSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z.string().nonempty("O email é obrigatório").email("E-mail inválido"),
  cpf: z
    .string()
    .nonempty("O CPF é obrigatório")
    .min(11, "O CPF deve conter no mínimo 11 digitos")
    .max(14, "O CPF deve conter no máximo 14 digitos"),
  phone: z.string().nonempty("O telefone é obrigatório"),
  birthdate: z.string().nonempty("A data de nascimento é obrigatória"),
  description: z.string().optional(),
});

export type EditProfileData = z.infer<typeof editProfileSchema>;
