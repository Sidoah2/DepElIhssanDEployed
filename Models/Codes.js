const mongoose=require("mongoose")

const shemaCode=new mongoose.Schema({
    code:{
        default:"0000",
        type:String,
    },
 
   
    
},{timestamps:true})

const Code=mongoose.model("Code",shemaCode);

module.exports=Code