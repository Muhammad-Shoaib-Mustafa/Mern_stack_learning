const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==="/")
    fs.appendFileSync("demo.txt","\welcome")
res.end("File Created")

})
server.listen(2010,()=>{
    console.log("server is running on port 2010")
})