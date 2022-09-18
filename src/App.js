import React, { useState ,useEffect} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Registration from './Components/UserRegistration/Registration'
import Login from './Components/User/Login';
import UserDetailsPage from './Components/UserDetails/UserDetailsPage';
// import UserDetailsEditPage from './Components/UserDetails/UserDetailsEditPage';

function App() {
  const [details, setDetails] = useState([]);

  // const LOCAL_STORAGE = "details"
  // useEffect(()=>{localStorage.setItem(LOCAL_STORAGE,JSON.stringify(details))},[details]);
  // useEffect(()=>{
  //   const revDetails = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  //   if(revDetails) setDetails(revDetails);},[]);

  const addData = (data) => {
    console.log(data);
    setDetails([...details, data]);
    console.log(details);
  };
  return (
    <div className="App">


<BrowserRouter>
      <Routes>
    <Route exact path="/" element ={<Registration addData = {addData}/>}/>
    <Route exact path="/login" element ={<Login details = {details}/>}/>
    <Route path="/UserDetailsPage" element ={<UserDetailsPage details = {details} />}/>
     {/* <Route path="/UserDetailsEditPage" element ={<UserDetailsEditPage details = {details} />}/> */}
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
