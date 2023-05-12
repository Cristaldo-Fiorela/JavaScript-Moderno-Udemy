import express from "express";

const router =  express.Router();

// req lo que node envia : res es lo que express envia
router.get('/' , (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
});
router.get('/nosotros' , (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    }); // render imprime una vista
});
router.get('/viajes' , (req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    }); // render imprime una vista
});
router.get('/testimoniales' , (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    }); // render imprime una vista
});

export default router;