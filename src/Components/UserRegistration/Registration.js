import React, {useState } from "react";
import {useNavigate} from "react-router-dom"; 

export default function Registration(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [age,setAge]=useState('');

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(e);
       
        const regDetails = {
            name: name,
            email: email,
            password: password,
            city:city,
            age:age
         };
        console.log("56", regDetails);
        if(name === "")
         alert("Username feild is required");
         else if(!email.includes("@")){
            alert("email feild is required");
         }
         else if(password === ""){
            alert("password feild is required");
         }
         else if(password.length<5){
            alert("password length greater 5");
         }
         else if(city === ""){
            alert("city feild is required");
         }
         else if(age === ""){
            alert("age feild is required");
         }
         else{
            alert("Registration succsefuly");
             localStorage.setItem('data',JSON.stringify(regDetails))
            navigate("/login");
         }
        
      };

    return(
        <div>
        <div>
            <h1>User Registration</h1>
           </div>
            <form onSubmit={(e)=>handleAdd(e)}>
                <label className="label">UserName</label>
            <input className="input" type="text" 
            value={name} onChange={(e)=>setName(e.target.value)}/>
            <label className="label">Email</label>
            <input  className="input" type="text"
             value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label className="label">Password</label> 
            <input  className="input" type="password"
             value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label className="label">City</label> 
            <input  className="input" type="city"
             value={city} onChange={(e)=>setCity(e.target.value)}/>
             <label className="label">Age</label>
            <input  className="input" type="age"
             value={age} onChange={(e)=>setAge(e.target.value)}/>
                <button className="btn">submit</button>
            </form>
        </div>
    )
}