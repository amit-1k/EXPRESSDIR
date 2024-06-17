const express=require("express")
const app=express()
 

const port=8080

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

app.use((req,res)=>{ 
    console.log("request received")
    let code="<h1>Address</h1><ul><li>Amit</li><li>Jehanabad</li></ul>"
    res.send(code)
    // res.send({
    //     name:"apple",
    //     color:"red"
  
    // })
})