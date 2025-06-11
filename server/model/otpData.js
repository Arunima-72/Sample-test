const mongoose = require('mongoose');

const otpDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
   
});

module.exports = mongoose.model('OtpData', otpDataSchema);