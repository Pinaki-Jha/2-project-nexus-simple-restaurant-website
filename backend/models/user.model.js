const mongoose = require("mongoose")

const User = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

const model = mongoose.model("Userdata",User)

module.exports = model