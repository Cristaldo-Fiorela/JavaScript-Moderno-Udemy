// PARAMETROS Y FUNCIONES

function sumar(a, b) { // a y b son parametros
    console.log( a + b )
}

sumar(2, 3); // 2 y 3 son argumentos
sumar(200, 184);
sumar(123, 421);

function saludar(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Fiorela', 'Cristaldo');
saludar() // como no le paso nada toma como undefined