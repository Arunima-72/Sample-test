import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmailForm from './components/EmailForm'
import { Route, Router, Routes } from 'react-router-dom'
import OtpForm from './components/OtpForm'
import Welcome from './components/Welcome'

function App() {
  

  return (
    <>
     
      
        <h1>Email OTP Verification</h1>
        
          <Routes>
            <Route path="/" element={<EmailForm />} />
            <Route path="/verifyotp" element={<OtpForm />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        
    
    </>
  )
}

export default App
