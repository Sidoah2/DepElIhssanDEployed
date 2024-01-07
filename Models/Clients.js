const mongoose=require("mongoose")

const shemaClient=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    IdUser:{
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
    adresseMagasin:{
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
    verss:{
        type:Number,
        required:true,
        
    },
    dattesAnciennes:{
        type:Number,
        required:true,
        
    },
    
},{timestamps:true})

const Client=mongoose.model("Client",shemaClient);

module.exports=Client