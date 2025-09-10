const mongoose=require("mongoose")

const userSchema=new mongoose.Schema(
    {
         userName:{
            type:String,
            required:true,
            default:"user",
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            min:[6,"password should be biiger then 6 , Got {VALUE}"]
        },userName:{
            type:String,
            required:true,
            default:"user",
            lowercase:true
        },
        addreesh:{

        }

    },{timestamps:true}
);

export const User=mongoose.model("User",userSchema);