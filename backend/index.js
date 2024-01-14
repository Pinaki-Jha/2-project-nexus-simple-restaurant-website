const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const User = require("./models/user.model")
const bcrypt = require("bcryptjs")

require("dotenv").config()


const app = express()

mongoose.connect(process.env.MONGODB_URI)

app.use(cors())
app.use(express.json())


app.post('/api/register', async(req,res)=>{
    console.log("registering...")
    try{
        const newPassword = await bcrypt.hash(req.body.password,10)
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password:newPassword, 
        })
        console.log(req.body)
        return res.json({status:"ok", message:"Registration Successful. Please Log in."})
    }catch(err){
        console.log(err)
        return res.json({status:"Error",message:"A user with that email already exists"})
    }
})


app.post('/api/login', async(req,res)=>{
    console.log("...logging in")
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.json({status:"not ok", user:false, message:"A user with that email doesn't exist"})
        }
        const isPassValid = await bcrypt.compare(req.body.password, user.password)
        if(isPassValid){
            const token = jwt.sign({
                username: user.username,
                email: user.email
            },process.env.SECRET)

            return res.json({status:"ok",user:token, message:"Login Successful"})
        }

        else{
            return res.json({status:"not ok",user:false, message:"Incorrect Password"})
        }

    }catch(err){
        console.log(err)
        return res.json({status:"not ok",user:false, message:"An error has occured."})
    }
})




app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server Started...")
})