// create a server
const http=require("node:http");

const server=http.createServer((req,res)=>{

    if(req.url==="/getSecretData"){
        res.end("Harshit is going to be sucessfull soon.")
    }
    res.end("Hello world");
})
server.listen(7777);

