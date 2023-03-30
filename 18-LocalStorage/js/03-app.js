//Eliminando con localStorage
localStorage.removeItem('nombre');

//Actualizar un registro
// En local storage no hay un update por lo que vamos a reescribir el valor de aquello que buscamos modificar.

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));


// Limpiando el localStorage
localStorage.clear();