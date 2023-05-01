/*
Try => intenta un codigo
catch => ejecutar el sgte codigo en caso de que falle el primero

no detiene la ejecucion del codigo siguiente si el try falla
 */

console.log(1+1)
try {
    hola();
} catch(err) {
    console.log(err);
}

console.log(2+2)