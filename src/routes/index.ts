import { authRoutes } from "./auth";
import { salesRoutes } from "./sales";
import { userRoutes } from "./user";

 // aqui passando userRoutes depois exportando para pagina onde esta rodando servidor..
 const routes = (app:any) => {
    authRoutes(app)
    userRoutes(app);  // Registra as rotas de usuário
    salesRoutes(app)
 }
 
 export default routes;  // exporta para  app que esta rodando  o servidor ;