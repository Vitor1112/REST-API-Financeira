// Validação do usuário com Zod
import { z } from "zod";

 export const salesValidation = z.object({
    coin: z.string(), // Validação para string não vazia
    data_purchase: z.string(), // Validação para e-mails válidos
    value_purchase: z.number(), // Validação de tamanho mínimo
    unity_purchase: z.number(), 
    total_money_purchase:z.number(),
  
});


export const updateSalesValidation = z.object({
    value_sale: z.number().nullable(),
    data_sale: z.string().nullable(), // Ajuste aqui se mudou para String
    unity_sale: z.number().nullable(),
    total_money_sale: z.number().nullable(),
    profit: z.number().nullable(),
});



