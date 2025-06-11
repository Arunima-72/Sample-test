import React, { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
const EmailForm = () => {
    const [email,setEmail]=useState("");
    const [msg,setmsg]=useState("");
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
        const res=await axios.post("http://localhost:3000/sendotp",{email})
         setmsg(res.data.message);
        localStorage.setItem("userEmail", email);
      navigate("/verifyotp");
          } 
          catch (error) {
      setmsg("Failed to send OTP. Try again.");
    }
  }; 
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
<label>Email</label><br></br>
<input type='email' required value={email}  onChange={(e)=> setEmail(e.target.value)}/><br></br><br></br>
<button type='submit' color='blue' style={{backgroundColor:"blue"}}>Send OTP</button>
      </form>
    </div>
  )
}

export default EmailForm
