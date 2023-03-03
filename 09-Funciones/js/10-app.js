// ARROW FUNCTION
// 3ra  manera de declarar funciones

const aprendiendo = function() {
    console.log("aprendiendo JavaScript")
}
aprendiendo()


// Se elimina la function y se reemplaza por =>
const aprendiendo2 = () => {
    console.log("aprendiendo JavaScript con arrow functions")
}
aprendiendo2()

//Si solo tenemos codigo de una linea, podemos eliminar las llaves
// Tambien cuando poseen una sola linea dan implicito el return por lo que se puede eliminar el console.log
const aprendiendo3 = () => "aprendiendo JavaScript con arrow functions 2";

console.log(aprendiendo2())