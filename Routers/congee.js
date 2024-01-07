const express=require("express")
const router=express.Router()
const Congee =require("../Models/Congees")
const moment=require('moment')

router.post("/",async(req,res)=>{

      const NewCongee=Congee({
        UserId:req.body.UserId,
      })
      const result=await NewCongee.save()
      console.log(result)
      return res.status(201).json(result)
})


router.get("/:User",async(req,res)=>{
  const AllCongees=await Congee.find({UserId:req.params.User})
  return res.status(200).json(AllCongees)
})
router.get("/currentcongee/:User",async(req,res)=>{
  const AllCongees=await Congee.findOneAndUpdate({UserId:req.params.User},{
    $set:{
     arrivee:moment().format("DD/MM/YYYY")
    }
  },{new:true}).sort({createdAt:-1})
  return res.status(200).json(AllCongees)
})
module.exports=router

