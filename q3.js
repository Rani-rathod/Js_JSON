var  fs=require("fs")
let a={
    name:"Rani",
    age:18,
    ng:"navgurukul"
}
let b = JSON.stringify(a,null,"\t");
fs.writeFileSync("q3.json",b)



// var  fs=require("fs")
// let a={
//     name:"Rani",
//     age:18,
//     ng:"navgurukul"
// }
// let b = JSON.stringify(a);
// fs.writeFileSync("q3.json",b)



// parseInt
