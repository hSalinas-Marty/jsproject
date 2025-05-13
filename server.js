const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, 'airbnb', 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'airbnb', 'views', 'index.ejs'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
