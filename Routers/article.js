const express=require("express")
const router=express.Router()
const Article =require("../Models/Articles")

router.post("/:User",async(req,res)=>{

      const NewArticle=Article({
        User:req.params.User,
        observation:req.body.observation,
        image:req.body.image,
        nameproduit:req.body.nameproduit

      })
      const result=await NewArticle.save()
      return res.status(201).json(result)
})
router.get("/:User",async(req,res)=>{
  const articles=await Article.find({User:req.params.User})
  return res.status(200).json(articles)
})
router.get("/",async(req,res)=>{
  const articles=await Article.find()
  return res.status(200).json(articles)
})
router.delete("/:idArticle",async(req,res)=>{
  const article=await Article.findById(req.params.idArticle)
  if(article){
    await Article.findByIdAndDelete(req.params.idArticle)
  }
  return res.status(200).json({message:"deleted"})
})


module.exports=router

