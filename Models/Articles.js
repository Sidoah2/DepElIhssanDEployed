const mongoose=require("mongoose")

const shemaArticle=new mongoose.Schema({
    User:{
        required:true,
        type:String,
    },
 
    observation:{
        type:String,
default:""    },
    image:{
        type:String,
        required:true,
    },
    nameproduit:{
        type:String,
        required:true,
        default:""
    },
  
    
},{timestamps:true})

const Article=mongoose.model("Article",shemaArticle);

module.exports=Article