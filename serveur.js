const express = require('express');
const app = express();
const port = 3000;
const {join} = require("node:path")

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("public"))

// Route pour la page d'accueil
app.get("/test", (req, res) => {
  res.send('Bienvenue sur TeddyBeer&Be');
});

app.get("/", function (req,res) {
    res.sendFile(join(__dirname, "/airbnb/views/index.html"))
})

app.get("/home", function (req,res) {
    res.sendFile(join(__dirname, "/airbnb/views/home.html"))
})


// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est lancé sur http://localhost:${port}`);
});