const mongoose = require("mongoose");

// const mongoose=require(Mongoose)

const userSchema=new mongoose.Schema(
    {
        userName:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email:{
            type:String,
            required:[true,"email can't be empty"],
            unique:true
        },
        password:{
            type:String,
            required: true,
            min:[6,"password should be more the 6 , got {VALUE}"],
        }

    },{timestamps:true}
);


export const User=mongoose.model("User",userSchema);