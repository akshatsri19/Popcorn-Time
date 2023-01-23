const map = L.map('map')
  
// Get the tile layer from OpenStreetMaps
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.setView([48.8584, 2.2945], 16);
  
// Set the map view to the user's location
// Uncomment below to set map according to user location
// map.locate({setView: true, maxZoom: 16});

// Show a market at the position of the Eiffel Tower
let eiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);

// Bind popup to the marker with a popup
eiffelMarker.bindPopup("Eiffel Tower").openPopup();