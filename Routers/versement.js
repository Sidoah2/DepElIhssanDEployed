const express=require("express")
const router=express.Router()
const Versement =require("../Models/Versements")

router.post("/",async(req,res)=>{

      const NewVersement=Versement({

        Client:req.body.Client,
        UserId:req.body.UserId,

        Versement:req.body.Versement
       
      })
      const result=await NewVersement.save()
      console.log(result)
      return res.status(201).json(result)
})

router.get("/:User",async(req,res)=>{
  const AllVersements=await Versement.find({UserId:req.params.User})
  return res.status(200).json(AllVersements)
})
module.exports=router

