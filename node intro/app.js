//pocess.argv.forEach((index, val) => {
    //console.log(`${index}: ${val}`);
//});

//console.log("PROCESS: ", process);

//console.log("titulo del proceso", process.title);
//console.log("so", process.platform);
//console.log("node version", process.version);

//const name = require('readline').createInterface({
    //input: process.stdin,
    //output: process.stdout
//})

//name.question("Cual es el nombre?", name => {
    //console.log(`Bienvenido ${name}`)
//})


//function suma(a,b){
    //return a+b;
//}

const operation = require("./functions.js");

//declaracion de variables, var let const
const result = operation.suma(5,7);
console.log("El resultado es: ", result);

//module.exports = {
    //suma
//}