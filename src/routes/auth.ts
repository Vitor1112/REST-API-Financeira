import { login } from "../controllers/authController";

export const authRoutes =(app:any)=>{
    app.post("/login",login)
}