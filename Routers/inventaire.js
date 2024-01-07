const express=require("express")
const router=express.Router()
const Inventaire =require("../Models/Inventaire")

router.post("/:UserId/",async(req,res)=>{

    const NewInventaire=Inventaire({
      name:req.body.name,
      cntt:req.body.cntt,
      PrixAchat:req.body.PrixAchat,
      ZoneStockage:req.body.ZoneStockage,
      Fournisseur:req.body.Fournisseur,
      Category:req.body.Category,
      prixuni:req.body.prixuni,
      UserId:req.params.UserId,
      image:req.body.image
         
        })
        const result=await NewInventaire.save()
        return res.status(201).json(result)
  

      
})

router.put("/:IdProduit", async(req,res)  =>{
  try{
      

   const updateQuntity=await Inventaire.findByIdAndUpdate(req.params.IdProduit,{
     $set:{
       cntt:req.body.cntt,
       isupdated:true
     }
   },{new:true})
   
   res.status(200).json(updateQuntity);
  }catch (error){

     res.status(500).json({message:"something wrong"});
     console.log(error.message)
  }
});

router.get("/:UserId",async(req,res)=>{
  const Allproduit=await Inventaire.find({UserId:req.params.UserId})
  return res.status(200).json(Allproduit)
})
router.get("/Produit/:nameproduit",async(req,res)=>{
  const Allproduit=await Inventaire.find({name:req.params.nameproduit})
  return res.status(200).json(Allproduit)
})



module.exports=router

