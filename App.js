const express=require("express")
const Checking= require("./Routes/Checking")//importing

const app=express()

app.use(express.json())

app.use("/auth",Checking)

app.get("/",function (req,res) {
    console.log('working')
    
})




app.listen(9090,()=>{
    console.log('server running')
})