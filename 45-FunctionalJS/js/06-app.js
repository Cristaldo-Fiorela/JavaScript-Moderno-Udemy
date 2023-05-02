/* 
* PURE FUNCTIONS o FUNCIONES PURAS
- la cantidad de parametros que se paseen es la cantidad que debe retornar
- no modifica un valor orginal
- no modifica el tipo de valor que retorna con el que recibe
 */

const numero1 = 20;
const duplicar = numero => numero * 2;

const resultado = duplicar(numero1);

console.log(resultado);
console.log(numero1);