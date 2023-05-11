import express from "express";

const router =  express.Router();

// req lo que node envia : res es lo que express envia
router.get('/' , (req, res) => {
    res.render('Inicio');
});
router.get('/nosotros' , (req, res) => {
    const viajes = 'Viaje a Alemania'

    res.render('nosotros', {
        viajes, // object literal
    }); // render imprime una vista
});


export default router;