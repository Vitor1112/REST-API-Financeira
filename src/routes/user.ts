import { create, get, getId, remove, update } from "../controllers/userController"
import { verifyToken } from "../middlewares/auth"

export const userRoutes = (app:any)=>{
    app.post("/user", create)
    app.get("/user", verifyToken,get)
    app.get("/user/:id",verifyToken,getId)
    app.put("/user/:id",verifyToken,update)
    app.delete("/user/:id",verifyToken,remove)

}