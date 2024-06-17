const express=require("express")
const app=express()

let port=1223

app.listen(port,()=>{
    console.log("server started")
})

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params
    console.log(username,id)
    res.send("The result founded")
})
