import { getUseEmail} from "../repositories/auth";
import bcrypt  from 'bcrypt'
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import {authValidation }from "../validations/auth";



export const login = async(req:Request,res:Response)=>{
    try {
        const data = await authValidation.parse(req.body)  // Para validar email
        const user = await getUseEmail(data.email)  // mas dentro user vem todos dados usuario como nome e senha .mas  se email for validdo vou busca no banco de dados .
        
        // caso não existe usuario 
        if (!user) throw{message:"Usuário não existe !"}

         // Para verficar se a senha é mesma que usario esta passando é que esta salva no banco de dado , for vou gerar um token 
        if(user && bcrypt.compareSync(req.body.password,user.password)){
            const token = jwt.sign({
                id:user.id,
                email:user.email,
                name :user.name
            },String(process.env.TOKEN_KEY),{
                expiresIn:"24h"
            })
             console.log(user)
            return res.status(200).send({token})
        }else {
            return res.status(401).send({ message: "Email e/ou senha incorretos" });
        }

    } catch (error) {
        res.status(400).send(error);
    }
}