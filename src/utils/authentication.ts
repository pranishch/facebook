import jwt from "jsonwebtoken"
import { exit } from "process";


const generateToken = (email: string) => {
    const JWT_KEY = process.env.JWT_KEY;
    if (!JWT_KEY) {
        console.log("jwt must not be null")
        exit(1)
    }
    const token = jwt.sign({ email: email }, JWT_KEY)
    return token;
}

const verifyToken = (token: string) => {
    const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) {
    console.log("jwt must not be null")
    exit(1)
}
    try {
        const data = jwt.verify(token, JWT_KEY)
        return data
    }
    catch(error){
        return null
    }
}

export { generateToken, verifyToken }