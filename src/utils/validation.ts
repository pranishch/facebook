import {rules} from "../configs/validation_rules"



const valLen = (data: string, min: number, max: number): boolean => {
    if (data.length < min || data.length > max) return false;
    return true;
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
export { valEmail, valPassword, valName }