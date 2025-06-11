import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/verifyotp", {
        email,
        otp,
      });

      if (res.data.success) {
        navigate("/welcome");
      } else {
        setMsg("Invalid OTP. Try again.");
      }
    } catch (error) {
      setMsg("Error verifying OTP.");
    }
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>

<input type='text' required value={otp} placeholder='Enter OTP' onChange={(e)=> setOtp(e.target.value)}/><br></br><br></br>
<button type='submit' style={{backgroundColor:"blue"}}>Verify OTP</button>
      </form>
    </div>
  )
}

export default OtpForm
