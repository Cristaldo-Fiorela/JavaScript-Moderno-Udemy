const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregando ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises)
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Colombia', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Argentina', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();