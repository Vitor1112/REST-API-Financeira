import { create, get, getId, remove, update } from "../controllers/salesController";
import { verifyToken } from "../middlewares/auth";



export const salesRoutes = (app:any) => {
    app.post("/sales",verifyToken,create)//ok
    app.get("/sales",verifyToken,get) //Ok
    app.get("/sales/:id",verifyToken,getId)//0k
    app.put("/sales/:id",verifyToken,update)
    app.delete("/sales/:id",verifyToken,remove)//Ok
};