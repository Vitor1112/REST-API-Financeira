import { authRoutes } from "./auth";
import { salesRoutes } from "./sales";
import { userRoutes } from "./user";

 
 const routes = (app:any) => {
    authRoutes(app)
    userRoutes(app);  // Registra as rotas de usuário
    salesRoutes(app)
 }
 
 export default routes;  