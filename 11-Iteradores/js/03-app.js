// Reto Fizz Buzz

// todos los multiplos de 3 imprimen fizz... 3 6 9 12
// todos los multiplos de 5 imprimen buzz... 5 10 15 20
// todos los multiplos de 3 y 5 imprimen  FIZZBUZZ

for(let i = 0;  i < 100; i++) {
    if ( i % 15 === 0) { // OTRA CONDICION ( i % 3 === 0 && i % 5 === 0) 
        console.log(`${i} FIZZ BUZZ`);
    } else if ( i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if ( i % 5 === 0) {
        console.log(`${i} buzz`);
    } 
}
