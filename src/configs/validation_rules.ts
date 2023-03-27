import { IRules } from "../interfaces"

const rules:IRules = { 
    name:{
        min:5,
        max:15,
        reg:/^[a-zA-Z]+$/
    },

    email:{
        min:11,
        max:25,
        reg:/^[a-z]+(([0-9a-z]+)\.{0,1})*[a-z0-9]+@[a-z]+(([a-z]+)\.{0,1})*[a-z]{2,3}$/
    },

    password:{
        min:8,
        max:15,
        reg:/^[a-zA-Z]+[@]+[0-9]+$/
    },

    phone:{
        min:10,
        max:15,
        reg:/^[0-9]+$/
    }


    
}

const _rules:any=rules

export default _rules