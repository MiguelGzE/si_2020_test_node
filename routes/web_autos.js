var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  console.log(req.protocol + '://' + req.get('host') + '/');
  request('http://localhost:3000/autos', (err, response, body) => {
    res.render('web_autos', { data: JSON.parse(body) });
  });
});

// router.get('/:id', function(req, res, next) {
//   request('http://localhost:3000/autos' + req.params.id, (err, response, body) => {
//     res.render('perfil', { data: JSON.parse(body) });
//   });
// });

module.exports = router;
