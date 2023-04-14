const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = true;

    if(descuento) {
        resolve('descuento aplicado');
    } else {
        reject('no se puedo aplicar el descuento');
    }
})

aplicarDescuento
    .then( resultado => {console.log(resultado);})
    .catch(error => { console.log(error)})

/*
Hay 3 valores posibles en los promises
* fullfilled - el promise se cumplio
* rejected - el promise no se cumplio
* pending - no se ha cumplido y tampoco fue rechazado
*/

function descuento(mensaje) {
    console.log(mensaje);
}