import { Router } from "express"
import { login , register ,profile} from "../controllers/user_controller"

//got express Router object 
const userRouter: Router = Router()

//provided instruction for routing to controller
userRouter.post("/login", login)
userRouter.post("/register",register)
userRouter.get("/profile",profile)
export default userRouter
