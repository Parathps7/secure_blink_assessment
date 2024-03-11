const express = require('express')
const dotenv = require('dotenv').config()
const bodyparser = require('body-parser')
const userRoute = require('./routes/userRoute')
const imageRoute = require('./routes/imageRoute')
const app = express();
const connectdb = require('./config/dbConnection')

app.use(express.json());
app.use(bodyparser.json())
connectdb();



// routes setup

//test
app.get('/',(req,res)=>{res.status(200).send("It's working")})

//user register,login,forget password
app.use('/api/users',userRoute);

//image and blog portal
app.use('/api/images',imageRoute);

app.listen(process.env.PORT,()=>{console.log(`Server is runnning on port ${process.env.PORT}`)})