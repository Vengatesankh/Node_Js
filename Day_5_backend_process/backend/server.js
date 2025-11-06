import express from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express()
console.log(app);
const PORT = process.env.PORT || 3000

//server Listening
app.listen(PORT,()=>{
    console.log(`Server is Listening on : ${PORT}`);
})