// import fs from "fs"
const fs = require("fs")
fs.writeFile("process.txt","Hello node ",(err)=>{
    if(err){
        console.log("Error in File write:",err.message);
    }else{
        console.log("File write successfully...");
    }
});
// fs.readFile();
fs.readFile("process.txt",'utf-8',(err,data)=>{
    if(err){
        console.log("Error in file",err.message);
    }else{
        console.log("File Content:",data);
    }
})
// fs.rename();
// fs.appendFile();
// fs.unlink();
// fs.existsSync()

// //create folder
// fs.mkdir();
fs.mkdir("Node",(err)=>{
    if(err){
        console.log("Folder Creation Error:",err.message);
    }else{
        console.log("Folder Created");
    }

})
fs.writeFile("./Node/test.txt","Hellow Developers",(err)=>{
    if(err){
        console.log("Write is Failed:",err.message);
    }else{
        console.log("Write Fucessfully");
    }
})
//vengatesan khjh fjipfjpdjkjklj rafjjhudfeej absukkefeeeenkjokkkkkk
// fs.readdir();
fs.readFile("./Node",(err,data)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("File Readed",data);
    }
})
// fs.rmdir()