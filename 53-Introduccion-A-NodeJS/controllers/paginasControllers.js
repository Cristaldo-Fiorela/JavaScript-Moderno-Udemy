import { Viaje } from '../models/Viaje.js';

// req lo que node envia : res es lo que express envia
const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    }); // render imprime una vista
}

const paginaViajes = async (req, res) => {
    // Consulta base de datos
    const viajes = await Viaje.findAll();
    console.log(viajes);

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes, // object literal
    }); // render imprime una vista
}

const paginaTestimoniales =  (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    }); // render imprime una vista
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes, 
    paginaTestimoniales
}