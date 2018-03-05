mapboxgl.accessToken = 'pk.eyJ1IjoianJoZWFkdCIsImEiOiJjamU4cDUxMm8waXBpMzNtOXViZzA4eHJhIn0.rf8fWYFosO_l_oMGaF6NYQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    center: [0,50],
    zoom: 1

   });
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
    },
        trackUserLocation: true
}));
// location data goes in here - i can't fiure out how to link to a bigger dataset
var geojson = {
  type: 'FeatureCollection',
  features-jordan: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.032, 38.913]
    },
    properties: {
      title: 'Mapbox',
      description: 'Washington, D.C.'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
   coordinates: [-122.414, 37.776]
 },
 properties: {
   title: 'Mapbox',
   description: 'San Francisco, California'
 }
}]
};
// add markers to map
geojson.features-jordan.forEach(function(marker) {

// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
.addTo(map);
});
