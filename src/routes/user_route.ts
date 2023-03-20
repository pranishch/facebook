import { Router } from "express"
import { login } from "../controllers/user_controller"

//got express Router object 
const userRouter: Router = Router()

//provided instruction for routing to controller
userRouter.post("/login", login)


export default userRouter
