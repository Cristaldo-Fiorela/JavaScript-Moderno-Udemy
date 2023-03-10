// Crear y comparar booleans
const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);
console.log(typeof boolean1);

console.log(boolean1 == boolean3) //false
console.log(boolean1 === boolean3) //false

// Al usar "new" utilizamos un constructor que crea objetos e ignora el valor primitivo
const boolean4 = new Boolean(true) 
console.log(typeof boolean4) // objeto