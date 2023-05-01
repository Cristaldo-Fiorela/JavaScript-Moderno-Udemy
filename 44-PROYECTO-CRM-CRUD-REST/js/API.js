const url = 'http://localhost:4000/clientes';

// Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {
    console.log(cliente)

    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( cliente ),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        
    }
}

// Obtiene nuevo cliente 
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error)
    }
}

//Elimina un cliente...
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}