const express=require("express")
const router=express.Router()
const User =require("../Models/Users")

router.post("/",async(req,res)=>{

      const NewUser=User({

    name:req.body.name,
    lieu:req.body.lieu,
    daterec:req.body.daterec,
    salairej:req.body.salairej,
    grade:req.body.grade,  


    
       
      })
      const result=await NewUser.save()
      console.log(result)
      return res.status(201).json(result)
})

router.get("/",async(req,res)=>{
  const Allusers=await User.find({grade:{$in:["user","admin"]} })
  return res.status(200).json(Allusers)
})

router.get("/admin",async(req,res)=>{
  const Allusers=await User.find({grade:"admin" })
  return res.status(200).json(Allusers)
})
router.get("/empl",async(req,res)=>{
  const Allusers=await User.find()
  return res.status(200).json(Allusers)
})

router.put("/:id", async(req,res)  =>{
  try{
      
   const empl=await User.findByIdAndUpdate(req.params.id,{
     $set:{
      daterec:req.body.daterec,
      salairej:req.body.salairej
     }
   },{new:true})
   
   res.status(200).json(empl);
  }catch (error){

     res.status(500).json({message:"something wrong"});
     console.log(error.message)
  }
});
module.exports=router

