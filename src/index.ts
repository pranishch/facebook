import express, { Express } from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user_route"

dotenv.config() //configure .env

//created server object
const server: Express = express()

//setted express json middleware in server
server.use(express.json())

//setting routes here
server.use("/api/v1/user", userRouter)

//setup server to listen on specified port
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`))


