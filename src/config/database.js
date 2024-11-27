const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carga las variables de entorno

// Configuración de Sequelize con las variables de entorno
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false, // Desactiva logs para que sea más limpio
    }
);

// Función para probar la conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa con la base de datos.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

// Llamada para probar la conexión
testConnection();

module.exports = sequelize;
