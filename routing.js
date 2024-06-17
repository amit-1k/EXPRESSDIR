const express=require("express")
const app=express()

let port=8000

 app.listen(port,()=>{
    console.log("started the server with port no. ",port)
})

app.get("/",(req,res)=>{
    res.send("Hello , this is  root path")
    console.log("RADHA KRISHNA");
})

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params
    let htmlPage=`<h1 style="color:green">The name of usename is @${username} and id is ${id}</h1>`
    res.send(htmlPage)
 })

 app.get("/search?",(req,res)=>{
    let {q}=req.query
    let htmlPag=`<h1 style="color:purple">search result for query is ${q}</h1>`
    res.send(htmlPag)
 })

 
app.post("/",(req,res)=>{
    res.send("post the root path")
})