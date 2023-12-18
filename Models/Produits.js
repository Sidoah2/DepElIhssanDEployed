const mongoose=require("mongoose")

const shemaProduit=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    prixuni:{
        type:Number,
        required:true,
    },
    cntt:{
        type:Number,
        required:true,
        
    },
    
},{timestamps:true})

const Produit=mongoose.model("Produit",shemaProduit);

module.exports=Produit