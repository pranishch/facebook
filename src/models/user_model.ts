import { IUser } from "../interfaces";
import mongoose, { Model, Schema, HydratedDocument } from "mongoose"



const userSchema: Schema<IUser> = new Schema<IUser>({
  name: String,
  email: String,
  password: String,
  posts: [{ type: Schema.Types.ObjectId }]
})


const userModel: Model<IUser> = mongoose.model("User", userSchema)


export default userModel
