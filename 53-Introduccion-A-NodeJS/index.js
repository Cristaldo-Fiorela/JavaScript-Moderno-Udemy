//const express = require('express');
import express from 'express';
import router from './routes/index.js';

// Arranca el servidor
const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Definir la carpeta publica
app.use(express.static('public'))

// Agrega router
// metodo de express
//monta o coloca las funciones middleware especificadas en la ruta especificada
app.use('/', router) // soporta GET, PUT, POST, DELETE, PATCH

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});