const mongoose=require("mongoose")

const shemaversemnet=new mongoose.Schema({

    Client:{
        type:String,
        required:true,
    },
    UserId:{
        type:String,
        required:true,
    },
    Versement:{
        type:String,
        required:true,
    },
  
   
    
},{timestamps:true})

const Versement=mongoose.model("Versement",shemaversemnet);

module.exports=Versement