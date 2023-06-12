import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Deve ser email valido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type LoginData = z.infer<typeof schema>;
