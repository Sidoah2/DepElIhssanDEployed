const express=require("express")
const router=express.Router()
const Produits =require("../Models/Produits")

router.post("/",async(req,res)=>{

      const NewProduit=Produits({
    name:req.body.name,
    prixuni:req.body.prixuni,
    cntt:req.body.cntt,
    image:req.body.image
       
      })
      const result=await NewProduit.save()
      console.log(result)
      return res.status(201).json(result)
})

router.get("/",async(req,res)=>{
  const Allproduit=await Produits.find()
  return res.status(200).json(Allproduit)
})
module.exports=router

