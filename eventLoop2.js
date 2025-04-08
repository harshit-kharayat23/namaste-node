const a=100;
const fs=require("fs");

setImmediate(()=>{
    console.log("setImmediate");
})
Promise.resolve("Promise").then(console.log);
fs.readFile("file.txt","utf8",()=>{
    console.log("read the file");
})

setTimeout(()=>{
    console.log("timeout")
},3)

process.nextTick(()=>{
    console.log("process.next tick")
})


function printA(){
    console.log("a=",a);
}

printA();