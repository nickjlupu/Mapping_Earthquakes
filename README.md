# Mapping_Earthquakes

## Objectives

* Add three map styles to allow the user to select from three different maps.
* Use d3.json() to get earthquake & tectonic plate data and add the data using the L.geoJSON() layer.
* Style the earthquake data based on magnitude.
* Style the tectonic plate LineString data to stand out on the map.
* Add the tectonic plate data as an overlay with the earthquake data.


## Resources
* JavaScript
* html
* css
* Leaflet
* D3
* Mapbox
* data:  
  * Earthquake data from the past 7 days is obtained in GeoJSON format from the [USGS website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
  * Tectonic plate data is obtained in GeoJSON format from [fraxen's GitHub repository](https://github.com/fraxen/tectonicplates) 

## Description
A base layer is generated using Mapbox to hold the three base map styles.  Overlays are added for the earthquake & tectonic plate data.  These data are obtained by making separate API calls using d3.json() (sources noted in the Resources section).  The earthquake data is drilled down into to obtain the magnitude of each instance.  This parameter is passed into functions to style the circle markers with both size and color based on the magnitude.  

## Recommendations / Next Steps
* Add date and time to popups 

