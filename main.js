
const express=require("express")
const myapp=express()
const mongodb=require("mongoose")
// const bodyparser=require("body-parser")
const ProduitPath=require("./Routers/produit")
const ClientPath=require("./Routers/client")
const BonPath=require("./Routers/bon")
const DepensePath=require("./Routers/depense")
const ArticlePath=require("./Routers/article")
const InventairePath=require("./Routers/inventaire")
const UserPath=require("./Routers/user")
const VersementPath=require("./Routers/versement")
const FournisseurPath=require("./Routers/fournisseur")
const CongeePath=require("./Routers/congee")









myapp.use(express.json({limit:"500mb"}))
// myapp.use(bodyparser.urlencoded({extended:true,limit:"10000kb",parameterLimit:100000}))
mongodb.connect("mongodb+srv://Sido:rfHEJkk1vtcrJFM3@cluster0.ws397jp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database Connected.....  ")
}).catch((err)=>{ console.log("failed Connect ")})




myapp.use("/Api/v1/Produits/",ProduitPath)
myapp.use("/Api/v1/Bon/",BonPath)
myapp.use("/Api/v1/Depenses/",DepensePath)
myapp.use("/Api/v1/Articles/",ArticlePath)
myapp.use("/Api/v1/Inventaire/",InventairePath)
myapp.use("/Api/v1/User/",UserPath)
myapp.use("/Api/v1/ClientS/",ClientPath)
myapp.use("/Api/v1/Versements/",VersementPath)
myapp.use("/Api/v1/Fournisseur/",FournisseurPath)
myapp.use("/Api/v1/Congee/",CongeePath)




















const Port=process.env.Port || 3030
myapp.listen(Port,()=>{
    console.log("Serveur run on Port 3030...")
})