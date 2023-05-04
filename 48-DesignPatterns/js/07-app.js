//* NameSpace
// Crea un objeto global alrededor de tu app y agregar todas las funciones dentro en lugar de crear multiples funciones/objetos que pueden accederse de manera global

// * Siempre incia con un objeto
const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 45
    },
    {
        platillo: 'Hamburguesa',
        precio: 30
    },
    {
        platillo: 'Pancho',
        precio: 10
    }
];

restaurantApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log(`Bienvenidos a nuestro menu`);

        platillos.forEach( (platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu Platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio,
        };

        restaurantApp.platillos.push(nuevo);
    }
}

restaurantApp.funciones.ordenar(1);
restaurantApp.funciones.agregarPlatillo('Taco', 20);

const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);