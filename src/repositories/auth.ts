// Para buscar um email do banco de dado 
import { prisma } from "../services/prisma";
    // Para busca um usuario por email que esta castrado no banco de dados
export const getUseEmail = async (email:string)=>{
    const user = await prisma.user.findUnique({
        where:{
           email,
        }
    })
    return user
}