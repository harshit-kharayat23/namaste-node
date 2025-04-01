const fs=require("fs");
const https=require("https")
console.log("Hello world")
var a=120932;
var b=123123;


//synchronous
fs.readFileSync("./file.txt","utf8");
console.log("this will execute after file read")

// asynchoronous
https.get("https://dummy.restapiexample.com/api/v1/employees",(res)=>{
    console.log("Api call successfull");
})

fs.readFile("./file.txt","utf8",(err,data)=>{
        console.log(data);
});
setTimeout(()=>{
    console.log("Wait for 5 seconds")
},5000)


function multiplyfn(a,b){
    const ans=a*b;
    console.log(ans);
}

multiplyfn(a,b);