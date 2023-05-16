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

const paginaViajes = (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
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