// FOR IN
// itera sobre objetos

const automovil = {
    modelo: 'Chevy',
    year: 1997,
    motor: '6.0'
}

for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`)
}


// Tambien desde ecmascript 6 se puede usar for of para recorrer objetos. 
                                        // (objeto por el que quiero iterar)
for(let [llaves, valor] of Object.entries(automovil)) {
    console.log(valor);
}