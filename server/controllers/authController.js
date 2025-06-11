const OTP=require("../model/otpData")
const nodemailer=require("nodemailer")



const sendOtp=async (req,res) => {
    const {email}=req.body;
    const otpCode=Math.floor(10000+ Math.random()*90000).toString();

    await OTP.create({email,otp:otpCode})


    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.Email_USER,
            pass:process.env.Email_PASS,
        }
    })
   await transporter.sendMail({
    from:process.env.Email_USER,
    to:email,
    subject:"Your OTP Code",
    text:`Your OTP code is${otpCode}`,
   }) 
    res.json({ success: true, message: "OTP sent to email" });
};

const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const validOtp = await OTP.findOne({ otp });

  if (validOtp) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
};
module.exports={sendOtp,verifyOTP}