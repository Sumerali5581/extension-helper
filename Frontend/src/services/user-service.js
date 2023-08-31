import { myAxios } from "./helper";

export const signup=(user)=>{
    return myAxios.post("/users/register",user).then((response)=>response.data)
}

export const login=(loginDetail)=>{
    return myAxios.post('',loginDetail).then((response)=>response.data)
}