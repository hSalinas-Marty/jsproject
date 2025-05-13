var express = require('express');
var router = express.Router();
var logements = require('../data/data-logements')

/* GET home page. */
router.get('/logements/:id', function(req, res) {
  const id = parseInt(req.params.id) ;
  const logement = logements.find(l=>l.id === id) ;
  if (!logement){
    return res.status(404).send('logement non trouver');
  }
  res.render('detail', {logement})
});

module.exports = router;
