function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 3000);
    })
}


function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando predidos...');

        setTimeout(() => {
            resolve('Los predidos fueron descargados');
        }, 5000);
    })
}

/*
    * Promise.all 
    ejecuta al simultaneo las funciones que le pasemos
    recibe un arreglo con funciones dentro (sintaxis)
    ! las funciones que se pasan no deben requirir el resultado previo de otra para ejecutarse, es decir, deben ser independientes
 */ 
const app = async () => {
    try {
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
    } catch (error) {
        console.log(error);
    }
}

app();