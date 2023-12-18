
const express=require("express")
const myapp=express()
const mongodb=require("mongoose")
const ProduitPath=require("./Routers/produit")
const ClientPath=require("./Routers/client")
const BonPath=require("./Routers/bon")
const DepensePath=require("./Routers/depense")






myapp.use(express.json())
mongodb.connect("mongodb://127.0.0.1:27017/ElihssanDB").then(()=>{
    console.log("Database Connected.....  ")
}).catch((err)=>{ console.log("failed Connect ")})






myapp.use("/Api/v1/Produits/",ProduitPath)
myapp.use("/Api/v1/Bon/",BonPath)
myapp.use("/Api/v1/Depenses/",DepensePath)

myapp.use("/Api/v1/ClientS/",ClientPath)













myapp.listen(3030,()=>{
    console.log("Serveur run on Port 3030...")
})