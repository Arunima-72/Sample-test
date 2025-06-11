const mongoose = require('mongoose');
require ('dotenv').config()
mongoose.connect('mongodb+srv://Arunima:Arunima72@cluster0.dwfhkqr.mongodb.net/OtpDB?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('Connection established')
}).catch(()=>{
console.log('connection error')
})
            
       

