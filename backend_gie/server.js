const express=require('express');
const bodyParser=require('body-parser');
const fs=require('fs');
const app=express();
const PORT=3000;
const cors=require('cors');

app.use(bodyParser.json());

app.use(cors({
    origin:['*','http://localhost:4200'],
    methods:['GET','POST','DELETE','PUT']
}));


// Ruta para obtener todos los libros
app.get('/libros', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error al leer el archivo de datos');
        return;
      }
      res.json(JSON.parse(data));
    });
  });
  
  // Ruta para agregar un nuevo libro
  app.post('/libros', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error al leer el archivo de datos');
        return;
      }
  
      const libros = JSON.parse(data).libros;
      const nuevoLibro = req.body;
      nuevoLibro.id = libros.length ? libros[libros.length - 1].id + 1 : 1;
      libros.push(nuevoLibro);
  
      fs.writeFile('data.json', JSON.stringify({ libros: libros }, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error al escribir en el archivo de datos');
          return;
        }
        return res.status(201).json({
            message: 'Libro agregado exitosamente',
            libro: nuevoLibro
        })
      });
    });
  });
  
  // Ruta para eliminar un libro por id
  app.delete('/libros/:id', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error al leer el archivo de datos');
        return;
      }
  
      let libros = JSON.parse(data).libros;
      const libroId = parseInt(req.params.id, 10);
      libros = libros.filter(libro => libro.id !== libroId);
  
      fs.writeFile('data.json', JSON.stringify({ libros: libros }, null, 2), (err) => {
        if (err) {
          res.status(500).send('Error al escribir en el archivo de datos');
          return;
        }
        return res.status(200).json({
            message: `Libro con id ${libroId} eliminado exitosamente`,
        })
      });
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });