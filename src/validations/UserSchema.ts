import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre no puede estar vacío" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z
    .string()
    .email({ message: "Dirección de correo electrónico no válida" })
    .min(1, { message: "El correo electrónico no puede estar vacío" })
    .max(100, {
      message: "El correo electrónico debe tener menos de 100 caracteres",
    }),
  gender: z
    .string()
    .min(1, { message: "El género no puede estar vacío" })
    .max(50, { message: "El género debe tener menos de 50 caracteres" }),
  status: z.enum(["active", "inactive"], {
    message: "El estado debe ser 'active' o 'inactive'",
  }),
});
