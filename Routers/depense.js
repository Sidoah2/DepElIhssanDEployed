const express=require("express")
const router=express.Router()
const Depense =require("../Models/Depenses")

router.post("/",async(req,res)=>{

      const NewDepense=Depense({
        User:req.body.User,
        Category:req.body.Category,
        Montant:req.body.Montant

      })
      const result=await NewDepense.save()
      console.log(result)
      return res.status(201).json(result)
})
router.get("/:User",async(req,res)=>{
   
  const depenses=await Depense.find({User:req.params.User})
  return res.status(200).json(depenses)
})


module.exports=router

