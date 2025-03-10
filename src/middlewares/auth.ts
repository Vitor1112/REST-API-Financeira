import jwt from "jsonwebtoken"
import{Request,Response}from 'express'
// Para usar nas Rotas a verificação de Token ;
export const verifyToken =(req:Request, res:Response,next:any)=>{
    const token = req.headers.authorization
      // se não houve token aparece essa mensagem
    if(!token){
       return res.status(400).send({message:"Token é Obrigatório !"})
    }
    
       // Caso venho o Token faça isso aqui abaixo;
    try {
        const replace = token.replace("Bearer ","")

           // Para verfica se token é igual que esta na Variavel de ambiente;
        const decoded = jwt.verify(replace,String(process.env.TOKEN_KEY))
        next();
    } catch (error) {
       return res.status(401).send({ message: "Credenciais inválidas" });
    }
}