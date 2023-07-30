//import mongoose userSchema.js file
const mongoose = require('mongoose')
//validator

const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

//using mongoose ,define  schema for  users
const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error("Invalid Email")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }

   
   
})

//create a  model / collection  to strore document as  given schema

const users = new mongoose.model("users",userSchema)

//export model

module.exports = users