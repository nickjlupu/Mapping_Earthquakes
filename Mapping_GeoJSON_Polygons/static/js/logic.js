// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

let day = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let night = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
	"Night Navigation": night,
	"Day Navigation": day
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [44.0, -80.0],
	zoom: 2,
	layers: [night]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/nickjlupu/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json"

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
// 	console.log(data);
// 	// Creating a GeoJSON layer with the retrieved data.
// 	L.geoJson(data).addTo(map);
// });

// Create a style for the lines.
let myStyle = {
	color: "#ffffa1",
	weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
	console.log(data);
// Creating a GeoJSON layer with the retrieved data
L.geoJson(data, {
	style: myStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup("<h3>" + "Airline: " + feature.properties.airline + "</h3> <hr>" + "<h3>" + "Destination: " + feature.properties.dst + "</h3>"); 
	}	
})
.addTo(map);
});

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);