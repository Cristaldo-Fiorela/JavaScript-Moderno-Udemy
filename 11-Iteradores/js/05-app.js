// DO WHILE
// se ejecuta al menos una vez, independientemente de la ejecucion

let i = 0;

do {
    console.log(`Numero ${i}`)

    i++ //incremento
} while(i<10);

do {
    if ( i % 15 === 0) { // OTRA CONDICION ( i % 3 === 0 && i % 5 === 0) 
        console.log(`${i} FIZZ BUZZ`);
    } else if ( i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0) {
        console.log(`${i} buzz`);
    } 

    i++ //incremento
    
}while(i<100);