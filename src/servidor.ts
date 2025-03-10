import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/index";




dotenv.config(); // Carrega variáveis de ambiente
const app = express();

app.use(cors()); // /// ele serve para evitar error no cabeçalho quando fizer requisão no Api  usanod frontiend , sem esta usando o Insonimia 

app.use(express.json()); // Middleware para analisar JSON no corpo da requisição
routes(app)

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});