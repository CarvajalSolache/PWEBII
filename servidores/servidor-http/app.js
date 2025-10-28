const http = require('http');

// Definimos el puerto
const PORT = 2809;

// Creamos el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Mundo desde el servidor http');
});

// Iniciamos el servidor
server.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en http://localhost:${PORT}`);
});