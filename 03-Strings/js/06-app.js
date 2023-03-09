// Mas Strings methods
const producto = 'Monitor 20 pulgadas';


// .repeat te va a permitir repetir una cadena de texto
// si colocamos un decimal va a redondear el numero e imprimirlo dicha cantidad de veces

const texto = 'en promocion'.repeat(2);

console.log(texto);
console.log(`${producto} ${texto} !!!!`);

// .split divide un string

const actividad = 'Estoy aprendidendo JavaScript Moderno';
console.log(actividad.split(''));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(','));

const tweet = 'Aprendiendo JavaScript #JSModernoConJuan';
console.log(tweet.split('#'));