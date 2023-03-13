const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses2, meses3);
console.log(resultado);

// spread operador
const resultado2 = [...meses, ...meses2, ...meses3];
const resultado3 = [...meses, ...meses2, ...meses3, ...'Otro mes']; // <== separa el string cada caracter como una nueva posicion del array. O T R O M E S

console.log(resultado2);


