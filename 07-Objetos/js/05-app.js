const producto = {
    nombre : "monitor",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m"
    },
    mas_info : {
        paises: {
            importados: {
                1 : "China"
            },
            exportados: {
                ejemplo:  "argentina"
            },
        },
        tamano: {
            pulgadas: {
                pequeno: "15",
            },
            centimetros: {
                ejemplo2: 15,
            }
        }
    }
}

console.log(producto);
console.log(producto.informacion.peso);
