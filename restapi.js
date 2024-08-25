const express = require("express");
const server = express();
const cors = require("cors")
const arr = []

server.use("cors")
server.use(express.json())
server.get("/", function(req,res){
    res.send("helo world")
    res.json(arr)
})



server.get("/", (req,res)=>[
    res.status(200).json(arr)
])

server.post("/", function(req,res){
const  succes = {user_id:`${req.body.fullname}_${req.body.dob}` , ...req.body}




 if(succes){
    succes.issuccess= true
    arr.push(succes)
    res.status(201).json(succes)
 }
 

})


server.listen("9090", function(){
    console.log("server started")
})