// Validação do usuário com Zod
import { z } from "zod";

 export const authValidation = z.object({
  email: z.string().email(), // Validação para e-mails válidos
  password: z.string().min(6), // Validação de tamanho mínimo

});

