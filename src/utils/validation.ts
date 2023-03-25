import {rules} from "../configs/validation_rules"



const valLen = (data: string, min: number, max: number): boolean => {
    if (data.length < min || data.length > max) return false;
    return true;
}
interface IValidate {
    name:string,
    email:string,
    password:string
}

const validate =(data:IValidate)=>{
     //data={name:"pranish",email="pranish23@gmail.com",password="duffer"}
     //keys={"name","email",password}
    const keys:string[]=Object.keys(data)
    const error={error:false};
    }

   for(let i=0; i<keys.length; i++){
    let key = keys[i];
    let value = data[current_key]
    if (!value|| !valLen(value, rules[key].min, rules[key].max)) {
        error[key]=`Length must be from ${rules[key].min} to ${rules[key].max}`
        error.error=true
    }
    const reg: RegExp = rules[key].reg;
    const check = reg.test(value);

    if(!check){
        error[key]="Invalid "+key;
        error.error=true
    }
   }
   return error
   
}

const valEmail = (data: string | null): boolean => {
    if (!data || !valLen(data, rules.email.min, rules.email.max)) return false

    const reg: RegExp = rules.email.reg;
    const check = reg.test(data);
    return check;
}
const valPassword = (data: string | null): boolean => {
    if (!data || !valLen(data,rules.password. min, rules.password.max)) return false

    const reg: RegExp = rules.password.reg;
    const check = reg.test(data);
    return check;
}

const valName = (data: string | null): boolean => {
    if (!data || !valLen(data, rules.name.min, rules.name.max)) return false

    const reg: RegExp = rules.name.reg;
    const check = reg.test(data);
    return check;
}
export { valEmail, valPassword, valName , validate}