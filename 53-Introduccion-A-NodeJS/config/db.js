import Sequelize from 'sequelize';

// Creando nueva instancia de secuelize e indicando la base de datos a la que queremos conectarnos
// base de datos = agenciaviajes
// usuario y contraseña: root, ''
const db = new Sequelize('agenciaviajes', 'root', '', {
    host: '127.0.0.1',
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