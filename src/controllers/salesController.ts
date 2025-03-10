import { createSales,  getById,  getSales,  removeSale, updateSales ,} from "../repositories/sales";
import { salesValidation, updateSalesValidation } from "../validations/sales";
import {  Request,Response} from "express";

// Criar 
export const create = async(req:Request,res:Response)=>{
      // Muito atenção aquii
    try {
         await salesValidation.parse(req.body)// passo direto sem uso de const data 
        const sales = await createSales(req.body)
        return res.status(200).send(sales)
    } catch (error) {
        return res.status(400).send(error)
    }
}
// lista tudo 
export const get = async(req:Request,res:Response)=>{
    try {
        const sales = await getSales()
        return res.status(200).send(sales)
    } catch (error) {
        return res.status(400).send(error)
    }
}
/// lista por ID 
export const getId = async(req:Request,res:Response)=>{
    try {
     
        const sales = await getById(Number(req.params.id))
        return res.status(200).send(sales)
    } catch (error) {
        return res.status(400).send(error)
    }
}
// Atualizar

export const update = async(req:Request,res:Response)=>{
    try {

           // Muito atenção aquii
          await updateSalesValidation.parse(req.body) // passo direto sem uso de const data 
          const sales = await updateSales(Number(req.params.id),req.body)
      
        return res.status(200).send(sales)
    } catch (error) {
        
        return res.status(400).send(error)
    }
}
// DELETA 
export const remove = async(req:Request,res:Response)=>{
    try {
        await removeSale(Number(req.params.id))
        return res.status(200).send({message:'Deletado com Sucesso!'})
    } catch (error) {
        return res.status(400).send(error)
    }
}