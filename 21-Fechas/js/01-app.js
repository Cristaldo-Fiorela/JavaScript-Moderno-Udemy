const diaHoy = new Date();
const consultarDia = new Date('1-5-2000'); // cayo un miercoles
const consultarDia2 = new Date('January 5 2000'); // cayo un miercoles

let valor;

valor = diaHoy;

// Metodos 
// GET => obtiene el valor
valor = diaHoy.getFullYear; // año actual
valor = diaHoy.getMonth; // trae el mes. Enero=0
valor = diaHoy.getMinutes; // minutos en los que estamos
valor = diaHoy.getHours; // hora
valor = diaHoy.getTime; // milisegundos que transcurrieron desde el 1ro de enero de 1970 hasta la fecha

// SET => modifica el valor
valor = diaHoy.setFullYear(2010);

console.log(valor);
console.log(typeof valor); // objeto