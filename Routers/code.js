const express=require("express")
const router=express.Router()
const Code =require("../Models/Codes")



router.get("/",async(req,res)=>{
  const codes=await Code.find()
  return res.status(200).json(codes)
})


module.exports=router

