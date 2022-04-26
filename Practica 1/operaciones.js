var numero_1 = 12
var numero_2 = 4
var resultado


const operacion = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

operacion.question("Que operacion desea realizar? ", operacion =>{
    if(operacion = "suma"){
        resultado = numero_1+numero_2;
        console.log(`Resultado de la suma: ${resultado}`)
    };

    if(operacion = "resta"){
        resultado = numero_1-numero_2;
        console.log(`Resultado de la resta: ${resultado}`)
    };

    if(operacion = "multiplicacion"){
        resultado = numero_1*numero_2;
        console.log(`Resultado de la multiplicacion: ${resultado}`)
    };

    if(operacion = "divicion"){
        resultado = numero_1/numero_2;
        console.log(`Resultado de la divicion: ${resultado}`)
    };
})