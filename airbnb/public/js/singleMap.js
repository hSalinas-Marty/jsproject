function initSingleMap(logementData) {
    const map = L.map('map').setView(
        [logementData.latitude, logementData.longitude], 
        13
    );
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([logementData.latitude, logementData.longitude])
        .addTo(map)
}