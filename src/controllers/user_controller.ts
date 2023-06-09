import { Request, Response } from "express"
import userModel from "../models/user_model"
import { IUser, IResponse } from "../interfaces"
import { Document, HydratedDocument } from "mongoose"
import { validate } from "../utils/validation"
import bcrypt from "bcrypt"
import {generateToken , verifyToken} from "../utils/authentication"

interface IUserDoc extends IUser, Document { }

const login = async (req: Request, res: Response) => {

    var response: IResponse;

    const { email, password }: IUser = req.body;
    const validation = validate({ email, password })
    if (!validation.success) return res.send(validation)

    const user: IUserDoc | null = await userModel.findOne({ email })
    if (!user) {
        response = { success: false, message: "Invalid Credential", data: null }
        return res.send(response);
    }
    const hashedPassword = user.password

    const match = await bcrypt.compare(password, hashedPassword)
    if (!match) {
        response = { success: false, message: "Invalid Credential", data: null }
        return res.send(response);
    }
    const token = generateToken(email)

    res.send({ success: true, message: "Successfully logged In", data: user ,token:token});


}//login function


const register = async (req: Request, res: Response) => {

    var response: IResponse;

    const { name, email, password, phone }: IUser = req.body;

    const validation = validate({ name, email, password, phone })
    if (!validation.success) return res.send(validation)

    const user: IUserDoc | null = await userModel.findOne({ email })

    if (user) {
        response = { success: false, message: "Already exists", data: null }
        return res.send(response);
    }
    const hashedPassword = await bcrypt.hash(password, 4)
    const userObj: HydratedDocument<IUser> = new userModel<IUser>({ name: name, email, password: hashedPassword, phone });
    await userObj.save();

    response = { success: true, message: "successfully registered", data: userObj };
    res.send(response);
}//register

const profile = async (req: Request, res: Response) => {
    const { token} = req.headers
    const data = verifyToken(token)
    var response: IResponse;
    
    if(!data) {
        response = {success:false,message:"authentication failed",data:null}
        return res.send(response)
    }
    const {email}= data

    const userProfile: IUserDoc | null = await userModel.findOne({ email })

    if (!userProfile) {
        response = { success: false, message: "Profile not found", data: null }
        return res.send(response)
    }

    response = { success: true, message: "successfull", data: userProfile }
    res.send(response);

}

export { login, register, profile }
