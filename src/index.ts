import express, { Express } from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user_route"
import {connectDB} from "./configs/database"
import { exit } from "process"


dotenv.config() //configure .env
connectDB()

const JWT_KEY = process.env.JWT_KEY;
    if(!JWT_KEY) {
        console.log("jwt must not be null")
        exit(1)
    }


//created server object
const server: Express = express()

//setted express json middleware in server
server.use(express.json())

//setting routes here
server.use("/api/v1/user", userRouter)

//setup server to listen on specified port
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`))


