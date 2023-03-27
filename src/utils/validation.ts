import rules from "../configs/validation_rules"



const valLen = (data: string, min: number, max: number): boolean => {
    if (data.length < min || data.length > max) return false;
    return true;
}


const validate = (data: Record<string, string|undefined>) => {
    //data={name:"pranish",email="pranish23@gmail.com",password="duffer"}
    //keys={"name","email",password}
    const keys: string[] = Object.keys(data)
    const validation: Record<string, null | boolean | string> = { success: true,message:null};


    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = data[key]
        if (!value || !valLen(value, rules[key].min, rules[key].max)) {
            validation[key] = `Length must be from ${rules[key].min} to ${rules[key].max}`
            validation.success = false
            validation.message = "Invalid data"
            continue
        }
        
        const reg: RegExp = rules[key].reg;
        const check = reg.test(value);

        if (!check) {
            validation[key] = "Invalid " + key;
            validation.success= false
            validation.message="Invalid data"
        }
    
    }
    return validation

}

// const valEmail = (data: string | null): boolean => {
//     if (!data || !valLen(data, rules.email.min, rules.email.max)) return false

//     const reg: RegExp = rules.email.reg;
//     const check = reg.test(data);
//     return check;
// }
// const valPassword = (data: string | null): boolean => {
//     if (!data || !valLen(data, rules.password.min, rules.password.max)) return false

//     const reg: RegExp = rules.password.reg;
//     const check = reg.test(data);
//     return check;
// }

// const valName = (data: string | null): boolean => {
//     if (!data || !valLen(data, rules.name.min, rules.name.max)) return false

//     const reg: RegExp = rules.name.reg;
//     const check = reg.test(data);
//     return check;
// }
export { validate }