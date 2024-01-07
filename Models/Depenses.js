const mongoose=require("mongoose")

const shemaDepense=new mongoose.Schema({
    User:{
        required:true,
        type:String,
    },
    Category:{
        required:true,
        type:String,
    },
    Montant:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    }
  
    
},{timestamps:true})

const Depense=mongoose.model("Depense",shemaDepense);

module.exports=Depense