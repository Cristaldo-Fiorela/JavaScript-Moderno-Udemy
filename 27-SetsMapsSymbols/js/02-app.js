/*
WeakSet
En este solo se le puede pasar o agregar objetos a diferencia de los Sets normales.
No tiene .size
No son iterables
*/

const weakset = new WeakSet();

const cliente = {
    nombre: 'Fio',
    saldo: 8000,
}

const nombre = 'Fiorela';

// Metodos del weakset
weakset.add(cliente); // ok
weakset.add(nombre); // error - no permite algo que no sea objeto
console.log(weakset.has(cliente2)); // false porque no existe cliente2 pero si se permite el metodo.
weakset.delete(cliente);

console.log(weakset);