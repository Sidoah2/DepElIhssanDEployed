const express=require("express")
const router=express.Router()
const Client =require("../Models/Clients")

router.post("/",async(req,res)=>{

      const NewClient=Client({
    IdUser:req.body.IdUser,
    name:req.body.name,
    phone:req.body.phone,
    adresseMap:req.body.adresseMap,
    adresseMagasin:req.body.adresseMagasin,
    region:req.body.region,
    remarques:req.body.remarques,
   dattesAnciennes:req.body.dattesAnciennes
       
      })
      const result=await NewClient.save()
      console.log(result)
      return res.status(201).json(result)
})

router.get("/",async(req,res)=>{
  const Allclients=await Client.find({IdUser:"AHMED sidou"})
  return res.status(200).json(Allclients)
})
module.exports=router

