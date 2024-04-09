const mongoose=require("mongoose")

const shemaFournisseur=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
   
    phone:{
        type:Number,
        required:true,
    },
    adresseMap:{
        type:String,
        required:true,
    },
    adresseFournisseur:{
        type:String,
        required:true,
        
    },
    region:{
        type:String,
        required:true,
        
    },
    remarques:{
        type:String,
        required:true,
        
    },
    dattesAnciennes:{
        type:Number,
        required:true,
        
    },
    verss:{
        type:Number,
        required:true,
        
    },
    
},{timestamps:true})

const Fournisseur=mongoose.model("Fournisseur",shemaFournisseur);

module.exports=Fournisseur