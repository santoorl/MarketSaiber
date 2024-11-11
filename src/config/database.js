// Importamos Sequelize para gestionar la conexión a la base de datos
const { Sequelize } = require('sequelize');

// Creamos una instancia de Sequelize con las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,    // Nombre de la base de datos
  process.env.DB_USER,    // Usuario de la base de datos
  process.env.DB_PASS,    // Contraseña del usuario
  {
    host: process.env.DB_HOST,     // Servidor de la base de datos (generalmente localhost)
    dialect: 'postgres',           // Motor de la base de datos
    port: parseInt(process.env.DB_PORT, 10),     // Puerto de PostgreSQL, usualmente 5432
  }
);
console.log("Nombre de la Base de Datos:", process.env.DB_NAME);
console.log("Usuario de la Base de Datos:", process.env.DB_USER);
console.log("Contraseña de la Base de Datos:", process.env.DB_PASS);
console.log("Host de la Base de Datos:", process.env.DB_HOST);
console.log("Puerto de la Base de Datos:", process.env.DB_PORT);

// Exportamos la instancia de Sequelize para usarla en otras partes del proyecto
module.exports = sequelize;

sequelize.authenticate()
  .then(() => console.log('Conexión exitosa a la base de datos.'))
  .catch(error => console.error('No se pudo conectar a la base de datos:', error));
