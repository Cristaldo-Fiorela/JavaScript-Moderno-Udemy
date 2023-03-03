const numeros = [10, 20, 30, 40, 50];

// const [ primero, segundo , tercero ] = numeros
// const [ , , tercero ] = numeros
const [ , , tercero, ...cuarto] = numeros
// console.log(primero)
console.log(cuarto)