const express = require('express');
require('dotenv').config(); // Carga las variables de entorno
const sequelize = require('./config/database'); // Importa la conexión a la base de datos

const app = express();

// Middleware básico
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Bienvenido a MarketSaiber!');
});

// Levantar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    try {
        // Sincronizar la base de datos al iniciar el servidor
        await sequelize.sync({ force: false }); // Cambia a true para reiniciar tablas
        console.log('Base de datos sincronizada.');
    } catch (error) {
        console.error('Error al sincronizar la base de datos:', error);
    }
});
