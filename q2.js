


let jsonObj={
    name:"Rani",
    age:18,
    food:"Maggie"
}
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

// myJsonStr = myJsonStr.replace("Rani","Rathod")
// console.log(myJsonStr)


newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj)

