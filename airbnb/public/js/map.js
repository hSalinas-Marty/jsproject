function initMainMap(logementsData) {
  // Initialisation de la carte
  const map = L.map('map').setView([46.603354, 1.888334], 6);
  
  // Fond de carte
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Ajout des marqueurs
  logementsData.forEach(logement => {
      L.marker([logement.latitude, logement.longitude])
          .addTo(map)
          .bindPopup(`
              <b><a href="/logement/${logement.id}">${logement.titre}</a></b><br>
              <small>${logement.lieu}</small><br>
              ${logement.prix}/nuit
          `);
  });

  // Optionnel : clustering si beaucoup de marqueurs
  if (logementsData.length > 10) {
      const markers = L.markerClusterGroup();
      logementsData.forEach(logement => {
          markers.addLayer(
              L.marker([logement.latitude, logement.longitude])
                  .bindPopup(`...`)
          );
      });
      map.addLayer(markers);
  }
}