// Jordan's location data goes in here - i can't fiure out how to link to a bigger dataset
var geojson = {
  type: 'FeatureCollection',
  featuresjordan: [{
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


// add jordan's markers to map
geojson.featuresjordan.forEach(function(marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'markerjordan';
// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description.category + '</p>'))
.addTo(map);
});
