//Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');
//Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);
}
// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
    }
}

class UI {
    insertarPresupuesto( cantidad) {
        //Extrayendo los valores
        const { presupuesto, restante } = cantidad;

        // Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

//Instanciar
const ui = new UI;
let presupuesto;

//Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Cual es tu prespuesto?');
    //console.log(Number(presupuestoUsuario));

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)

    ui.insertarPresupuesto(presupuesto);
}


function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    console.log('Agregando Gasto');

    // Generar un objeto con el gasto
    //object literal => unue variables a una variable
    const gasto = { nombre, cantidad, id: Date.now() };

    //Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado correctamente');

    //Reinicia el formulario
    formulario.reset();

    console.log(gasto);
    console.log(presupuesto);
}