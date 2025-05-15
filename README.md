# Mini-Airbnb - Plateforme d'Annonces de Logements

## 🏡 Présentation du projet

Ce projet est une mini-plateforme inspirée d'Airbnb. Il a été développé dans le cadre d’un projet de développement web afin de mettre en pratique les compétences en JavaScript, ExpressJS, gestion des routes, templates EJS, et affichage dynamique de données.

L'objectif est de proposer une application simple permettant :
- d’afficher une liste de logements disponibles à la location,
- de consulter les détails de chaque logement via une URL dynamique,
- d’intégrer du CSS, des images, et des interactions JavaScript (carrousel, carte...).

## 🎯 Objectifs pédagogiques

- Manipulation du DOM en JavaScript
- Découverte d’ExpressJS (routage, templates, service de fichiers statiques)
- Utilisation d’EJS pour les vues dynamiques
- Structuration d’un projet Node.js
- Manipulation d’un tableau d’objets côté serveur comme base de données

---

## 📁 Structure du projet

```plaintext
jsproject/
├── README.md
├── package.json
├── server.js
└── airbnb/
    ├── app.js
    ├── package.json
    ├── bin/
    │   └── www
    ├── data/
    │   └── logements.js
    ├── public/
    │   ├── css/
    │   │   ├── logement.css
    │   │   └── style.css
    │   ├── img/
    │   └── js/
    │       ├── carrousel.js
    │       ├── map.js
    │       └── singleMap.js
    ├── routes/
    │   ├── index.js
    │   └── logements.js
    └── views/
        ├── error.ejs
        ├── index.ejs
        └── logement.ejs
```

---

## 🚀 Lancer le projet

### 1. Prérequis

- [Node.js](https://nodejs.org/) doit être installé sur votre machine.

### 2. Cloner le dépôt

```bash
git clone https://github.com/hSalinas-Marty/jsproject.git
cd jsproject
```

### 3. Installer les dépendances

```bash
npm install
cd airbnb
npm install
```

### 4. Lancer le serveur

Depuis la racine du projet :

```bash
node server.js
```

### 5. Accéder à l'application

Rendez-vous dans votre navigateur à l'adresse :  
👉 `http://localhost:3000`

---

## ⚙️ Fonctionnalités principales

- **Page d’accueil (`/`)** : liste des logements avec titre, image, et prix.
- **Page de détail (`/logement/:id`)** : affiche les infos d’un logement spécifique selon son ID.
- **Affichage dynamique** via EJS.
- **Fichiers statiques** (CSS, images, JS) servis avec Express.
- **Carte interactive** sur la page de détail avec Leaflet.js.

---

## 🛠️ Technologies utilisées

- HTML / CSS / JavaScript
- Node.js
- Express.js
- EJS
- Leaflet.js (pour l'affichage cartographique)

---

## 📌 À propos
  
Développeurs : *Victoria Pasquaud* et *Hugo Salinas--Marty*