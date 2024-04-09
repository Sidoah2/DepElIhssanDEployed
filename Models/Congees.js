const mongoose=require("mongoose")
const moment=require('moment')

const shemacongee=new mongoose.Schema({

    UserId:{
        type:String,
        required:true,
    },
    depart:{
        type:String,
        default:moment().format("DD/MM/YYYY")
    },
    arrivee:{
        type:String,
        default:"dd/mm/yyyy"
    },
  
   
    
},{timestamps:true})

const Congee=mongoose.model("Congee",shemacongee);

module.exports=Congee