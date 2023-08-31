import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth";
const Privateroute=()=>{
    let loggedIn=true;

    if(loggedIn){
        return <Outlet/>
    }else{
        return <Navigate to={"/login1"}/>
    }
}

export default Privateroute;