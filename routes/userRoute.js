const express = require('express')
const router = express.Router()
const {register,login,forgetpassword,resetpassword} =require('../controllers/userControllers')

// sign up
router.post('/register',register);

//sign in
router.post('/login',login);

//forgot password
router.post('/forget-password',forgetpassword);


//reset password
router.post('/reset-password/:token',resetpassword);

module.exports=router