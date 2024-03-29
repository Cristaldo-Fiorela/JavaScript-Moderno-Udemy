import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

// Creando nueva instancia de secuelize e indicando la base de datos a la que queremos conectarnos
// base de datos = agenciaviajes
// usuario y contraseña: root, ''
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000
    },
    operatorAliases: false
}); 

export default db