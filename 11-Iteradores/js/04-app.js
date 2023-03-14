// WHILE
// se ejecuta mientras una condicion sea verdadera

// Inicializando el  While
let i = 0; 

while(i < 10) {
    console.log(`Numero ${i}`)
    i++ // Incremento
}

while(i < 50) {
    if ( i % 15 === 0) { // OTRA CONDICION ( i % 3 === 0 && i % 5 === 0) 
        console.log(`${i} FIZZ BUZZ`);
    } else if ( i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0) {
        console.log(`${i} buzz`);
    } 
    i++
}