


let fs=require("fs");
let data=fs.readFileSync("q3.json")
let d=JSON.parse(data)
console.log(d.name)

