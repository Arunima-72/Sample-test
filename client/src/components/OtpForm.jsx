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
<label>Enter OTP</label>
<input type='text' required value={otp}  onChange={(e)=> setOtp(e.target.value)}/>
<button type='submit'>Verify OTP</button>
      </form>
    </div>
  )
}

export default OtpForm
