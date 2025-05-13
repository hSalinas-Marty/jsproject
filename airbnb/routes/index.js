var express = require('express');
var router = express.Router();

// Données des logements pour tester
const logements = [
  { titre: 'Appartement cosy', description: 'Idéal pour un week-end', prix: 80 },
  { titre: 'Villa avec piscine', description: 'Parfait pour des vacances en famille', prix: 200 }
];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Bienvenue sur TeddyBeer&Be',
    logements: logements // Envoie les logements à la vue
  });
});

module.exports = router;