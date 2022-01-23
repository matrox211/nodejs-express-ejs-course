//run main app (app.js or server.js or whatever)

const express = require('express')
const app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("Hello World 123")
})

app.listen(port,()=>{
    //console.log("Listening on port %d",port)
    //console.log("Listening on port " + port)
    console.log(`Listening on port ${port}`)
})

