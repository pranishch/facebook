import { Types } from "mongoose"

interface IUser {
  name: string,
  email: string,
  password: string,
  phone?: string,
  posts: Array<Types.ObjectId>
}


export { IUser }
