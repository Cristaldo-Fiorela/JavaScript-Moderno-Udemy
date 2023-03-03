
const producto = {
    nombre: "monitor",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso:"1kg", 
    medida: "1m"
}

console.log(producto)
console.log(medidas)

const resultado = Object.assign(producto, medidas)
console.log(resultado);

// Spreed operator o Rest operator

const resultadoDos =  { ...producto, ...medidas}
console.log(resultadoDos)