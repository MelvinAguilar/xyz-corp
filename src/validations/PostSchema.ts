import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .min(1, { message: "El título no puede estar vacío" })
    .max(40, { message: "El título debe tener menos de 40 caracteres" })
    .regex(/[^0-9]/, {
      message: "El título no debe contener únicamente números",
    }),
  body: z
    .string()
    .min(1, { message: "El cuerpo no puede estar vacío" })
    .max(200, { message: "El cuerpo debe tener menos de 200 caracteres" }),
});
