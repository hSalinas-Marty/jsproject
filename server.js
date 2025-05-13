const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Importer les données
const logements = require('./airbnb/data/logements');

// Définir le moteur de template EJS
app.set('views', path.join(__dirname, 'airbnb', 'views'));
app.set('view engine', 'ejs');

// Servir les fichiers statiques (CSS, images...)
app.use(express.static(path.join(__dirname, 'airbnb', 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.render('index', { logements });
});

app.get('/logement/:id', (req, res) => {
  const logementId = parseInt(req.params.id, 10); 
  const logement = logements.find(l => l.id === logementId); 

  if (!logement) {
    return res.status(404).send('Logement non trouvé');
  }

  res.render('logement', { logement }); 
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
