import mongoose from "mongoose";


const connectDB =()=>{
    mongoose.connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/facebook`)
    .then (()=> console.log("database is connected successfully"))
    .catch((error:any)=> console.log(error))
}

export {connectDB}