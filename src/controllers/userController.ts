/// Controller onde vai passa requisões//
import { createUser,getById, getUser,removeUser,updateUser,} from "../repositories/user";
import bcrypt  from 'bcrypt'
import userValidation from "../validations/userValidation";
import { Request,Response}from 'express'

/// Rota para criar um usuário
export const create = async (req:Request,res:Response) => {
  
    try {
      // Valida os dados da requisição
      const data = await userValidation.parse(req.body);
  
      // Criptografa a senha
      const hashedPassword = await bcrypt.hash(data.password, 10);

      data.password = hashedPassword; 
  
      // Cria o usuário
      const user = await createUser(data);
      res.status(200).send(user);
    } catch (error) {
      // Retorna os detalhes do erro de forma estruturada
      res.status(400).send(error);
    }
  };
  
// Rota listar todos os usuarios
export const get = async (req:Request,res:Response) => {
  try {
    const user = await getUser();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
// Rota busca por ID
export const getId = async (req:Request,res:Response) => {
  try {
    const user = await getById(Number(req.params.id));
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
// Rota para Atualizar dados
export const update = async (req:Request,res:Response) => {
  try {
    const user = await updateUser(Number(req.params.id), req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
// Rota para apagar dados
export const remove = async (req:Request,res:Response) => {
  try {
    await removeUser(Number(req.params.id));
    res.status(200).send({ mensage: "Deletado com sucesso !" });
  } catch (e) {
    res.status(400).send(e);
  }
};
