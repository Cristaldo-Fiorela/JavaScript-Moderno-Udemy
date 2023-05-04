// Module Pattern

const mostrarCliente = nombre => {
    console.log(nombre)
}

export default mostrarCliente;

/*
La formula sin los modulos de ECMASCRIPT6 son los siguientes

const modulo1 = (function() {
    const nombre = 'Fio';

    function hola() {
        console.log('hola')
    }

    return {
        nombre,
        hola,
    }
})();
*/