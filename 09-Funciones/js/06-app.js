// FUNCIONES Y PARAMETROS DEFAULT

function saludar(nombre, apellido = 'No tiene apellido') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Fiorela', 'Cristaldo');
