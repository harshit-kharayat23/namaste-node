const fs=require("fs")
setImmediate(()=>console.log("Immediate 1"));
setTimeout(()=>console.log("timeout 1"),0);
Promise.resolve("Promise").then(console.log)
fs.readFile("file.txt","utf8",()=>{
    setTimeout(()=>console.log("timeout 2"),0);
    process.nextTick(()=>console.log("process.nextTick2"));
    setImmediate(()=>console.log("Immediate 2"));
    console.log("read the file");
});

process.nextTick(()=>console.log("process.nextTick 1"));

console.log("Last line of file");

// last line of file
// process.nextTick 1
// promise
// timeout 1
// immediate 1
//read file
//process.nextTick2
//timeout 2
// immediate 2
