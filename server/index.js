const express=require("express");
const app=express()
const Port=process.env.PORT||4000
const cors=require("cors")
const {connect,disconnect}=require("./database/databaseConfig")
const router=require("./routeConnect");
connect()
// const routes = require("./routes");
app.use(express.json())
app.use(cors());
app.use("/",router)
app.listen(Port,()=>console.log("server running on 4000"))
