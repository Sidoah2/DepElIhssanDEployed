const mongoose=require("mongoose")

const shemaInventaire=new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },

    UserId:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true,
    },
    isupdated:{
        type:Boolean,
        default:false
    },
    name:{
        type:String,
        required:true,
    },
  
    PrixAchat:{
        type:String,
        required:true,
    },
    prixuni:{
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
   
    cntt:{
        type:Number,
        default:0,
        
    },
  
},{timestamps:true})

const Inventaire=mongoose.model("Inventaire",shemaInventaire);

module.exports=Inventaire