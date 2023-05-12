//const express = require('express');
import express from 'express';
import router from './routes/index.js';

// Arranca el servidor
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next(); // va al sgte middelware, si no esta el next se cae la pagina. Se puede forzar que continue en return next();
});

// Definir la carpeta publica
app.use(express.static('public'))

// Agrega router
app.use('/', router) // soporta GET, PUT, POST, DELETE, PATCH

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});