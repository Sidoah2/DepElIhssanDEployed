const mongoose=require("mongoose")

const shemaBon=new mongoose.Schema({
    
    IdClient:{
        required:true,
        ref:'Client',
        type:mongoose.Schema.Types.ObjectId,
    },
    IdUser:{
        type:String,
        required:true,
    },
    NBDV:{
        type:String,
        required:true,
    },
   
    Designation:{
        type:[String],
        required:true,
    },
    Quntity:{
        type:[String],
        required:true,
    },
    Prixuni:{
        type:[String],
        required:true,
    },
    Prixtotalbon:{
        type:String,
        required:true,
    },
    
},{timestamps:true})

const Bon=mongoose.model("Bon",shemaBon);

module.exports=Bon