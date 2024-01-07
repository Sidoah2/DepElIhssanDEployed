const mongoose=require("mongoose")

const shemaUser=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    grade:{
        type:String,
        required:true,
    },
    lieu:{
        type:String,
        required:true,
    },
    daterec:{
        type:String,
        default:"dd/mm/yyyy"
    }, salairej:{
        type:String,
        default:"0"
    },
  
   
    
},{timestamps:true})

const User=mongoose.model("User",shemaUser);

module.exports=User