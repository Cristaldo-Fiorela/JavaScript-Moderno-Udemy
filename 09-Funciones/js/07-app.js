
iniciarApp()

function iniciarApp() {
    console.log('Iniciando app...')

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion')

    usuarioAutenticado('Fiorela')
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere unos segundos...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}