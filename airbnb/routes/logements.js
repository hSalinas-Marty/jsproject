let express = require('express');
let router = express.Router();
let logements = require('../data/logements')

/* GET home page. */
router.get('..data/logements/:id', function(req, res) {
  const id = parseInt(req.params.id) ;
  const logement = logements.find(l=>l.id === id) ;
  if (!logement){
    return res.status(404).send('logement non trouver');
  }
  res.render('detail', {logement})
});

module.exports = router;
