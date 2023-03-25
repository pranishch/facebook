import { validateHeaderName } from "http";
import { valEmail, valName, valPassword ,validate} from "../utils/validation";

const email = "pranish2@gmail.com";
const name = "pranish";
const password = "duffer23";

interface IError {
    name: string|null,
    email: string|null,
    password: string|null,
    error:boolean
}

const error:IError = {name:null,email:null,password:null,error:false}


if (!valEmail(email)) {
    error.email="Invalid email";
    error.error=true
}
if (!valPassword(password)) {
    error.password="Invalid password";
    error.error=true
}
if (!valName(name)){
    error.name="Invalid name";
    error.error=true

} 

if (error.error==true) res.send(error)
const error_output = validate({name,email,password})
if(error_output.error) res.send(error_output)