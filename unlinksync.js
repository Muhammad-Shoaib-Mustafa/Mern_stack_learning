const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    const url=req.url
    const path="./sample.txt"
    if(url==="/"){
        const isfile=fs.existsSync(path)
        if(isfile){
            fs.unlinkSync("./sample.txt")
            res.end("file deleted")
        }else{
            res.end("file not found")
        }
    }
    else{
        res.end("request ignored")
    }

})
server.listen(1002,()=>{
    console.log("server is running on port 1002")
})