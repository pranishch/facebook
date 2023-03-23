import { Request, Response } from "express"
import userModel from "../models/user_model"
import { IUser, IResponse } from "../interfaces"
import { Document, HydratedDocument } from "mongoose"


interface IUserDoc extends IUser, Document { }

const login = async (req: Request, res: Response) => {

    var response: IResponse;

    const { email, password }: IUser = req.body;
    const user: IUserDoc | null = await userModel.findOne({ email, password })

    if (!user) {
        response = { success: false, message: "Invalid Credential", data: null }
        return res.send(response);
    }
    response = { success: true, message: "Successfully logged In", data: user }
    res.send(response);

}//login function


const register = async (req: Request, res: Response) => {

    var response: IResponse;

    const { name, email, password, phone }: IUser = req.body;
    const user: IUserDoc | null = await userModel.findOne({ email })

    if (user) {
        response = { success: false, message: "Already exists", data: user }
        return res.send(response);
    }

    const userObj: HydratedDocument<IUser> = new userModel<IUser>({ name, email, password, phone });
    await userObj.save();

    response = { success: true, message: "successfully registered", data: userObj };
    res.send(response);
}//register


export { login , register}
