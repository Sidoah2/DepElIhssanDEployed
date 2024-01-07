const express=require("express")
const router=express.Router()
const Fournisseur =require("../Models/Fournisseurs")

router.post("/",async(req,res)=>{

      const NewFournisseur=Fournisseur({
    name:req.body.name,
    phone:req.body.phone,
    adresseMap:req.body.adresseMap,
    adresseFournisseur:req.body.adresseFournisseur,
    region:req.body.region,
    remarques:req.body.remarques,
    verss:req.body.verss,
   dattesAnciennes:req.body.dattesAnciennes
       
      })
      const result=await NewFournisseur.save()
      console.log(result)
      return res.status(201).json(result)
})

// router.get("/:User",async(req,res)=>{
//   const Allclients=await Client.find({IdUser:req.params.User})
//   return res.status(200).json(Allclients)
// })
router.get("/",async(req,res)=>{
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
  const allFournisseur=await Fournisseur.find()
  return res.status(200).json(allFournisseur)
})
// router.delete("/:id",async(req,res)=>{
//   console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
//   await Client.findByIdAndDelete(req.params.id)
//   return res.status(200).json({message:"delete"})
// })


router.put("/updateverss/:idfournisseur", async(req,res)  =>{
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  console.log(req.params.idfournisseur)
  try{
      
   const updateverss=await Fournisseur.findByIdAndUpdate(req.params.idfournisseur,{
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

