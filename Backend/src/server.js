import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';
import cors from 'cors'; // Importar cors
import { getUsers } from './helpers/getUsers.js';

const app = express();
const port = 5000; // Puerto del servidor backend

// Usar cors para permitir solicitudes desde cualquier origen
app.use(cors()); // Esto habilita CORS para todas las rutas

// Middleware para poder manejar datos JSON
app.use(bodyParser.json());

// Ruta para obtener los usuarios (leer desde el archivo JSON)
app.get('/api/users', async (req, res) => {
  fs.readFile('users.json', 'utf-8', async (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo' });
    }
    const usersfromapi = await getUsers();
    const users = JSON.parse(data);
    
    for(let i = 0; i < usersfromapi.length; i++)
    {
        users.push(usersfromapi[i]);
    }
    res.json(users);
  });
});

// Ruta para agregar un nuevo usuario (guardar en el archivo JSON)
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer el archivo' });
    }

    const users = JSON.parse(data);
    users.push(newUser);
    

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar el usuario' });
      }
      res.status(201).json(newUser);
    });
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
//   );
