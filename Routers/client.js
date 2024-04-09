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
    verss:req.body.verss,

   dattesAnciennes:req.body.dattesAnciennes
       
      })
      const result=await NewClient.save()
      console.log(result)
      return res.status(201).json(result)
})

router.get("/:User",async(req,res)=>{
  const Allclients=await Client.find({IdUser:req.params.User})
  return res.status(200).json(Allclients)
})
router.get("/",async(req,res)=>{
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
  const Allclients=await Client.find()
  return res.status(200).json(Allclients)
})

router.delete("/:id",async(req,res)=>{
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
  await Client.findByIdAndDelete(req.params.id)
  return res.status(200).json({message:"delete"})
})


router.put("/updateverss/:idClient", async(req,res)  =>{
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  console.log(req.params.idClient)
  try{
      
   const updateverss=await Client.findByIdAndUpdate(req.params.idClient,{
     $set:{
       verss:req.body.verss
     }
   },{new:true})
   
   res.status(200).json(updateverss);
  }catch (error){

     res.status(500).json({message:"something wrong"});
     console.log(error.message)
  }
});
module.exports=router

