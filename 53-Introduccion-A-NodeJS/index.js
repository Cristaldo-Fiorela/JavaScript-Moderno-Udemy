//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'
import dotenv from 'dotenv';
//import dotenv from 'dotenv/config'; ! no requiere la linea 8

dotenv.config();
console.log(process.env.BD_HOST)
const app = express();

// Conectar la base de datos
db.authenticate() // retorna promise
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error) );

// Definir puerto
// http://localhost/phpmyadmin/
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

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded(  {extended: true}));

// Definir la carpeta publica
app.use(express.static('public'))

// Agrega router
app.use('/', router) // soporta GET, PUT, POST, DELETE, PATCH

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});