// * Mediator
// se comunica con objetos diferentes a la vez
// el mediador define objetos ya localizados para objetivos especificos

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}


function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;

}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}
function Subasta() {
    let compradores = {};

    return {
        regitrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear objetos
const fio = new Comprador('Fio');
const pablo = new Comprador('Pablo');
const vendedor =  new Vendedor('Vendedor de autos');
const subasta = new Subasta();

// Registra la subasta
subasta.regitrar(fio);
subasta.regitrar(pablo);
subasta.regitrar(vendedor);

// ofertas
vendedor.oferta('Mustang 66', 300);

fio.oferta(350, fio);
pablo.oferta(450, pablo);
fio.oferta(500, fio);
pablo.oferta(700, pablo);

vendedor.vendido('Pablo');
