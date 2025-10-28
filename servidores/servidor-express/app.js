const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola mundo desde el servidor Express');
});

// Puerto 
const PORT = 2809;

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});
