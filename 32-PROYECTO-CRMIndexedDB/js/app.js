(function () {
    let DB;
    //const contenedorCliente = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if (window.indexedDB.open('crm', 1)) {
            obtenerClientesProfe();
        }
    })

    //Crear la base de datos
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function () {
            console.log('Hubo un error');
        };

        crearDB.onsuccess = function () {
            DB = crearDB.result;
        }

        crearDB.onupgradeneeded = function (e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });
        }

        console.log('Db Lista y creada');
    }

    function imprimirClientes() {
        // Leyendo el contendio de la base de datos
        const objectStore = DB.transaction('crm').objectStore('crm');

        // openCursos actua como iterador de la respuesta de mi base de datos
        objectStore.openCursor().onsuccess = function (e) {
            //console.log(e.target.result) // consultamos si los datos estan entrando bien

            const cursor = e.target.result;
            if (cursor) {
                //console.log(cursor.value) // todo ok

                const { nombre, telefono, empresa, id } = cursor.value;

                // Creamos un elemento contenedor donde imprimir nuestros datos ಠ_ಠ
                const tableRowCliente = document.createElement('TR');
                tableRowCliente.dataset.id = id;

                // Modificamos el HTML de la ultima columna para que permita dos TD juntos
                const accionesTableHeading = document.querySelector('th').nextElementSibling.nextElementSibling.nextElementSibling;
                //console.log(accionesTableHeading)
                accionesTableHeading.setAttribute('colspan', '2');

                //Creando los elementos que debemos rellenar (●'◡'●)
                const nombreCliente = document.createElement('TD');
                nombreCliente.innerHTML = `${nombre}`

                const telefonoCliente = document.createElement('TD');
                telefonoCliente.innerHTML = `${telefono}`

                const empresaCliente = document.createElement('TD');
                empresaCliente.innerHTML = `${empresa}`

                // Agregando el boton de editar...
                const accionesTDuno = document.createElement('TD');
                const btnEditar = document.createElement('BUTTON');
                btnEditar.innerHTML = 'Editar';

                // Agregando el boton de eliminar...
                const accionesTDdos = document.createElement('TD');
                const btnEliminar = document.createElement('BUTTON');
                btnEliminar.innerHTML = 'Eliminar';

                //AGREGANDO AL HTML
                accionesTDuno.appendChild(btnEditar);
                accionesTDdos.appendChild(btnEliminar);

                tableRowCliente.appendChild(nombreCliente);
                tableRowCliente.appendChild(telefonoCliente);
                tableRowCliente.appendChild(empresaCliente);
                tableRowCliente.appendChild(accionesTDuno);
                tableRowCliente.appendChild(accionesTDdos);

                contenedorCliente.appendChild(tableRowCliente);

                //Va al sgte elemento 
                cursor.continue();
            }
        }
    }

    function obtenerClientesProfe() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        }

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;

                if (cursor) {
                    const { nombre, empresa, email, telefono, id } = cursor.value;
    
                    const listadoClientes = document.querySelector('#listado-clientes');
                    listadoClientes.innerHTML += ` 
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${telefono}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${empresa}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
                            </td>
                        </tr>
                        `;
                    cursor.continue();
                } else {
                    console.log('No hay mas registros');
                }
            }
        }
    }

})();

