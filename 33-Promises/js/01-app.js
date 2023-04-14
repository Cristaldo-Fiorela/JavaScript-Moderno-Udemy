/*
    Callbacks:

*/

const paises = ['Brasil', 'Argentina', 'Paraguay'];

function nuevoPais(pais, callback) {
    setInterval(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setInterval(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 1000);
}
mostrarPaises();

nuevoPais('Colombia', mostrarPaises)