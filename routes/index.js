var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comic = require('../models/comics');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/saluda', (req, res, next) => {
  res.render('hola', { nombre: 'Miguel',
    colores: [
      {id: 1, nombre: 'rojo'},
      {id: 2, nombre: 'verde'},
      {id: 3, nombre: 'azul'},
      {id: 4, nombre: 'amarillo'}
    ]
  });
});

router.get('/alta', (req, res, next) => {
  res.render('alta_comic', {});
});

router.post('/grabar', (req, res, next) => {
  var nombre = req.body.nombre;
  var url = req.body.imagen;
  var poder = req.body.poder;
  var miComic = Comic(
      {
        nombre: nombre,
        imagen: url,
        poderes: poder
      }
  );
  miComic.save((err, data) => {
    if (err) res.send('Error al guardar los datos');
    else res.render('alta_ok', data);
  });
});

router.get('/listar', (req, res, next) => {
  //leer de mongo y recuperarlo en data
  Comic.find({}, (err, data) => {
    console.log(data);
    if (err) res.send('Error: ' + send);
    else res.render('catalogo', {comics: data});
  });
});

module.exports = router;
