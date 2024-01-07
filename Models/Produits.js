const mongoose=require("mongoose")

const shemaProduit=new mongoose.Schema({

    Category:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    DateAchat:{
        type:String,
        required:true,
    },
    PrixAchat:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    ZoneStockage:{
        type:String,
        required:true,
    },
    
    Fournisseur:{
        type:String,
        required:true,
    },
    prixunigros:{
        type:String,
        required:true,
    },
    prixunisubgros:{
        type:String,
        required:true,
    },
    cntt:{
        type:Number,
        required:true,
        
    },
     cnttemblg:{
        type:Number,
        required:true,
        
    },
    verss:{
        type:Number,
        required:true,
        
    },
    DateExp:{
        type:String,
        default:"/"
    }
    
},{timestamps:true})

const Produit=mongoose.model("Produit",shemaProduit);

module.exports=Produit