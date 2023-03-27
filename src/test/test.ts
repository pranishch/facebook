import { validate} from "../utils/validation";



interface IError {
    name: string|null,
    email: string|null,
    password: string|null,
    error:boolean
}

const email = "pranish2@gmail.com";
const name = "pranish";
const password = "duffer@23";

const error= validate({email,name,password})
if (error.status) console.log("error occur")
else 
console.log("success")

