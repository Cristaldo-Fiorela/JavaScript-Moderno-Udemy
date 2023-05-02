/*
* COMPOSITION
- Escribir muchas funciones e ir llamando en tu objeto lo que creas que vas a utilizar
- Son como las clases
- Se utiliza cuando tienen funciones que se pueden compartir entre objetos
 */


// 1. Definimos la funcion a compartir
const obtenerNombre = info =>({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`)
    }
})

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Email: ${info.email}`)
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`)
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`)
    }
})
// 2. Pasamos la funcion al objeto
function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
    )
}

// 3. Se puede reeutilizar
function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Fio', null, 'Coco');
cliente.mostrarNombre(); // Fio
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail(); // cliente@cliente.com
cliente.mostrarEmpresa(); // Coco

console.log('=================')

const empleado = Empleado('Fiorela', null, 'Programadora');
empleado.mostrarNombre(); // Fiorela
empleado.agregarEmail('empleado@empleado.com'); 
empleado.mostrarEmail(); // empleado@empleado.com
empleado.mostrarPuesto(); // Programadora