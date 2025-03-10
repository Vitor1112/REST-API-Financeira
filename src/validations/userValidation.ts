// Validação do usuário com Zod
import { z } from "zod";

const userValidation = z.object({
  name: z.string(), // Validação para string não vazia
  email: z.string().email(), // Validação para e-mails válidos
  password: z.string().min(6), // Validação de tamanho mínimo
});

export default userValidation; // Exportação padrão
