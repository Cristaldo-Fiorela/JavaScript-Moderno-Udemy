import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

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

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes, // object literal
    }); 
}

const paginaTestimoniales =  async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }); 
    } catch (error) {
        console.log(error);
    }

}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({where: { slug} } );

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        });
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
}