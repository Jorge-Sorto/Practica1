const nombre_usuario = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

nombre_usuario.question("Ingrese su nombre de usuario: ", nombre_usuario =>{
    console.log(`Bienvenido usuario: ${nombre_usuario}`);
})
