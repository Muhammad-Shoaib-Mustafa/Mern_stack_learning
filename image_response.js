const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const buffer = fs.readFileSync("./pic_1.jpeg");
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(buffer);
});
server.listen(3000, () => {
    console.log("server is running on port 3000");
});