const express=require('express');
const router=express.Router();
const{sendOtp,verifyOTP}=require('../controllers/authController')
router.post("/sendotp",sendOtp);
router.post("/verifyotp",verifyOTP);
module.exports=router;
