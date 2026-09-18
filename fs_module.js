const http=require("http")
const fs =require("fs")
const pathmodule=require("path")
const server=http.createServer((req,res)=>{
    if (req.url === '/favicon.ico') {
        res.writeHead(204);
        return res.end();
    }
   const filepath = pathmodule.join(__dirname, "fs_module.js");
    const isfile=fs.existsSync(filepath)
    if(isfile){
        const buffer=fs.readFileSync(filepath)
        const headers={
            'content-type':'text/javascript',
            'content-disposition':'attachment;filename="fs_module.js'
        }
        res.writeHead(200,headers)
        res.end(buffer)
    }
else{
    res.writeHead(404,{
        'content-type':'text/plain'

    })
    res.end("file nt found")
}
})
server.listen(1001,()=>{
    console.log("server is running on port 1001")
})