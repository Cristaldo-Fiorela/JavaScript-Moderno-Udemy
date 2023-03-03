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
                pais : "China"
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


const {nombre, mas_info: { paises: { importados: { pais } } } } = producto;

console.log(nombre)
console.log( pais )
console.log(paises)