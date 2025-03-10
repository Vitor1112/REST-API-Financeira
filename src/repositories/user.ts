/// modelo para banco de dados  para receber os dados , AQUI ONDE FAÇA OPERAÇÃO NO BANCO
import { prisma } from "../services/prisma";
import User from "../types/user.types";
// criar usuario 
export const createUser = async(data:User)=>{
    const user = await prisma.user.create({
        data ,// denrto dele dados "user" como se chama mesmo nome data que esta dentro função createUser ,passo só data .video 03 ensina isso.
        select:{
             id: true,
             name:true,
             email: true,
             password : false
        }
    })
    return user;
}
// Mostra todos usuario nos banco de dados 
export const getUser = async()=>{
    const users = await prisma.user.findMany({
      select:{
        id: true,
        name:true,
        email: true,
        password : false
   }
    },
      
    )
    return users;
}
// buscar usuario por Id
export const getById = async(id:number)=>{
    const user = await prisma.user.findUnique({
        where:{
            id,
        },
        select:{
          id: true,
          name:true,
          email: true,
          password : false
     }
    })
    return user
}
// Atualizar um usuário 
export const updateUser = async (id:number,data:User) => {
    const user = await prisma.user.update({
      where: {
        id,
      },data,select:{
        id: true,
        name:true,
        email: true,
        password : false
   }
    });
    return user;
  };
  
  // Deleta um usuario do banco de dados 
  export const removeUser = async (id:number) => {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    return;
  };
  