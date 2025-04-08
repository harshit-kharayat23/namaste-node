const fs=require("fs")
const a=100;

setImmediate(()=>{
    console.log("setImmediate is called!");
})

fs.readFile("file.txt","utf8",()=>{
    console.log("File reading CB");
})

setTimeout(()=>{
    console.log("Timer Expired")
},0);

function printA(){
    console.log("print A");
}

printA();
console.log("Hello world")