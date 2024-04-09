const express=require("express")
const router=express.Router()
const Produits =require("../Models/Produits")

router.post("/",async(req,res)=>{

      const NewProduit=Produits({
    name:req.body.name,
    prixuni:req.body.prixuni,
    cntt:req.body.cntt,
    image:req.body.image,
    DateExp:req.body.DateExp,
    DateAchat:req.body.DateAchat,
    prixunigros:req.body.prixunigros,
    prixunisubgros:req.body.prixunisubgros,

    verss:req.body.verss,
    cnttemblg:req.body.cnttemblg,

    
    
    PrixAchat:req.body.PrixAchat,
    ZoneStockage:req.body.ZoneStockage,

    Fournisseur:req.body.Fournisseur,

    

    Category:req.body.Category
       
      })
      const result=await NewProduit.save()
      console.log(result)
      return res.status(201).json(result)
})

router.get("/",async(req,res)=>{
  const Allproduit=await Produits.find()
  return res.status(200).json(Allproduit)
})


router.get("/:Idfournisseur",async(req,res)=>{
  const Allproduit=await Produits.find({Fournisseur:req.params.Idfournisseur})
  return res.status(200).json(Allproduit)
})


router.delete("/:id",async(req,res)=>{
  const produit=await Produits.findById(req.params.id)
  if(produit){
    await Produits.findByIdAndDelete(req.params.id)
  }
  return res.status(200).json({message:"Delete"})
})

router.put("/updateQuntity/:id", async(req,res)  =>{
  try{
      
   const updateQuntity=await Produits.findByIdAndUpdate(req.params.id,{
     $set:{
       cntt:req.body.cntt
     }
   },{new:true})
   
   res.status(200).json(updateQuntity);
  }catch (error){

     res.status(500).json({message:"something wrong"});
     console.log(error.message)
  }
});



module.exports=router

