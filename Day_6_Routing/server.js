import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pagesRouting from "./routing/pagesRouting.js";

dotenv.config();
//creating app
const app = express();
//Port Number
// const PORT = process.env.PORT || 8000;

app.use("/api",pagesRouting)


app.listen(3000,()=>{
    console.log(`Server is Listening On:3000`);
})