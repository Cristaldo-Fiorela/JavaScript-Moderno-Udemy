/*
LOCAL STORAGE
pertenece a la ventana global del navegador, api de js
diferencia entre local storage y session storage => local storage persiste mas, session storage al cerrar el navegador pierde los datos
Solo almacena strings.

agregar elementos a local storage
posee una "llave" y un "valor"
la "llave" es como vas a obtener esos valores o hacer referencia a ellos
el  "valor" es aquello que puede cambiar
*/
localStorage.setItem( 'nombre', 'juan');

// Convirtiendo un objeto a string ya que local storage solo almacena strings
const producto = {
    nombre: 'monitor 24 pulgadas',
    precio: 300,
}

const productoString = JSON.stringify( producto);
localStorage.setItem('producto', productoString)
console.log(productoString);

// Convirtiendo un array a string
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));
