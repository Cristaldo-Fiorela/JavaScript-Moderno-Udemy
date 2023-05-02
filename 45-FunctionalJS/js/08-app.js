/*
*   CLOUSURES
es una forma de acceder a una funcion o valor desde el exterior de  una funcion
esta ligado al scope
*/

const obtenerCliente =  () => {
    const nombre = 'Fio';
    const apellido = 'Cristaldo';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente =  obtenerCliente()
console.log(typeof cliente)
cliente();