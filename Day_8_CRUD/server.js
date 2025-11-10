import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/userRoutes.js";

dotenv.config();
//app creating
const app = express();
//middleware
app.use(express.json())

//Routing MiddleWare
app.use("/api",userRoute)

//PORT Number
const PORT = process.env.PORT || 5000

//testing API
app.get("/",(req,res)=>{
    res.json({message:"Hellow express"})
})
//server liste ing
app.listen(PORT,()=>{
    console.log("Server is Listening ON:",PORT);
})