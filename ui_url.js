const http=require("http")
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==="/"){
        const ui=` <div>
        <h1 style="color:pink">Homepage</h1>
        </div>`
        res.writeHead(200)
        res.end(ui)
        
    }
    else if(url==="/login"){
        const ui=` 
        <div>
        <h1 style="color:brown">LOGIN</h1>
        </div>  `
        res.writeHead(200)
        res.end(ui)

    }
    else if(url==="/signup"){
        const ui=`
        <div>
        <h1 style="color:grey"></h1>
        </div>
        `
        res.writeHead(200)
        res.end(ui)
    }else{
        const ui=`
        <div>
        <h1 style="color:Red"></h1>
        </div>
        `
        res.writeHead(404)
        res.end(ui)
    }
    server.listen(6070,()=>{
        console.log("Server is running on port 6070")
    })
})