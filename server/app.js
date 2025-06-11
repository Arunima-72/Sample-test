const express = require('express');
require ('dotenv').config()
const app = express();
require ('./db/connection')
const mongoose=require("mongoose");
const cors=require("cors")
app.use(express.json());
app.use(cors())
// Sample route
app.use('/',require("./routes/authRoutes"));

// Start server

app.listen(3000 ,() => {
    console.log(`Server running on port 3000`);
});