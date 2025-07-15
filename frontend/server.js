// frontend/server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (HTML, CSS, JS)
// Esto hace que los archivos en el directorio actual (frontend/) sean accesibles
app.use(express.static(path.join(__dirname, '')));

// Ruta para la página principal (sirve index.html cuando alguien accede a la raíz del servidor)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Manejo de errores básico para el servidor Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el servidor!');
});

// Iniciar el servidor de Node.js
app.listen(port, () => {
  console.log(`Servidor frontend de Node.js escuchando en http://localhost:${port}`);
  console.log(`Abre http://localhost:${port} en tu navegador.`);
});