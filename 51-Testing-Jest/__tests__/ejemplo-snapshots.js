const cliente = {
    nombre: 'Fiorela',
    balance: 500,
    tipo: 'Premium',
};

// * Snapshot
// Permite almacenar datos en una base de datos interna (crea su carpeta con archivo)
// Este almacenamiento permite comparar con aquello que estas evaluando
// Evalua todo el objeto, sin necesidad de ingresar a sus propiedades mediante el .
// Para actualizar nuestro cliente en el archivo de snapshot debemos escribir en nuestra consola "npm t -- -u"

describe('Testing al cliente', () => {
    test('Es Fiorela', () => {
        expect(cliente).toMatchSnapshot('Fiorela');
    })
});