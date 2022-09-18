import React, { useState } from "react";
import {useNavigate} from "react-router-dom"; 

export default function Login()
{
    
    const [name,setUser] = useState("");
    const [pass,setPass] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) =>
    {
        e.preventDefault();
        const loginDetails = JSON.parse(localStorage.getItem('data'));
        console.log("7844",loginDetails);
        if(loginDetails.name === name && loginDetails.password === pass)
            {
                alert("login successfully");
                //navigate("/UserDetailsEditPage");
                navigate("/UserDetailsPage");
                
            }
    }

    return(
        <>
        <div>
            <h1>LoggedIn User </h1>
           </div>
        <form onSubmit={(e)=>handleLogin(e)}>
           <label className="label">UserName</label>
           <input className="input"  type = "text"  value = {name} onChange={(e)=>setUser(e.target.value)}/>
            <label className="label">password</label>
            <input className="input"  type = "password"  value = {pass} onChange={(e)=>setPass(e.target.value)}/>
            <button className="btn">Login</button>
        </form>
        
        </>
    )
}