import { Types } from "mongoose"

interface IUser {
  name: string,
  email: string,
  password: string,
  phone?: string,
  posts?: Array<Types.ObjectId>
}

interface IResponse {
  success:boolean,
  message:string,
  data:any,
  errors?:string[]
}

interface IRulesValue {
  min:number,
  max:number,
  reg:RegExp
}

interface IRules{
  name:IRulesValue,
  email:IRulesValue,
  password:IRulesValue,
  phone:IRulesValue
}

export { IUser , IResponse ,IRules }
