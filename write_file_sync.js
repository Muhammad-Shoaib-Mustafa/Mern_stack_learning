const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    fs.writeFileSync("sample.txt","file creation is completed")
res.end("sucsess")})
    server.listen(1212,()=>{
        console.log("server is running on port 1212")
    })
