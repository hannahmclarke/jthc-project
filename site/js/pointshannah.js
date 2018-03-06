// Hannah's location data goes in here - i can't fiure out how to link to a bigger dataset
var geojson = {
  type: 'FeatureCollection',
  featureshannah: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-56, 14]
    },
    properties: {
      category: 'test',
      title: 'Mapbox',
      description: 'Washington, D.C.'

    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
   coordinates: [-99, 30]
 },
 properties: {
   title: 'Mapbox',
   description: 'San Francisco, California'
 }
}]
};

// add Hannah's markers to map
geojson.featureshannah.forEach(function(marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'markerhannah';
// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description.category + '</p>'))
.addTo(map);
});
