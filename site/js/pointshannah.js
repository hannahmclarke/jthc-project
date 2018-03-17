// Hannah's location data goes in here - i can't fiure out how to link to a bigger dataset

var geojson = {

  type: 'FeatureCollection',
  featureshannah: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-117.1492, 32.7322]
    },
    properties: {
      category: 'Park',
      title: 'Balboa Park, San Diego',
      description: 'Balboa Park in San Diego </br><div class="hannahimages"><a href="../images/hannah/balboa_(1).jpg" data-lightbox="balboa" data-title="Balboa Park"><img src="../images/hannah/balboa_(1).jpg"/></a><a href="../images/hannah/balboa_(2).jpg" data-lightbox="balboa" data-title="Balboa Park"><img src="../images/hannah/balboa_(2).jpg"/></a></div>'
    }
  },
  {
  type: 'Feature',
  geometry: {
    type: 'Point',
 coordinates: [-117.8406, 33.575]
},
properties: {
 category: 'Park',
 title: 'Crystal Cove Beach',
 description: 'Beach on Pacific Coast Highway, California </br><div class="hannahimages"><a href="../images/hannah/crystal_cove_(1).jpg" data-lightbox="crystal" data-title="Crystal Cove Beach"><img src="../images/hannah/crystal_cove_(1).jpg"/></a><a href="../images/hannah/crystal_cove_(2).jpg" data-lightbox="crystal" data-title="Crystal Cove Beach"><img src="../images/hannah/crystal_cove_(2).jpg"/></a></div>'
}
},

{
  type: 'Feature',
  geometry: {
    type: 'Point',
 coordinates: [-117.575175, 33.541843]
},
properties: {
 category: 'Campsite',
 title: 'Caspers Wilderness Park',
 description: 'Campsite in San Juan Capistrano, California </br><div class="hannahimages"><a href="../images/hannah/caspers_(1).jpg" data-lightbox="caspers" data-title="Caspers Wilderness Park"><img src="../images/hannah/caspers_(1).jpg"/></a><a href="../images/hannah/caspers_(2).jpg" data-lightbox="caspers" data-title="Caspers Wilderness Park"><img src="../images/hannah/caspers_(2).jpg"/></a></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-116.78669, 34.1586208]
},
properties: {
category: 'Campsite',
title: 'Heart Bar Campground',
description: 'Campsite in San Bernadino, California </br><div class="hannahimages"><a href="../images/hannah/heart_bar_(1).jpg" data-lightbox="heart" data-title="Heart Bar Campground"><img src="../images/hannah/heart_bar_(1).jpg"/></a><a href="../images/hannah/heart_bar_(2).jpg" data-lightbox="heart" data-title="Heart Bar Campground"><img src="../images/hannah/heart_bar_(2).jpg"/></a><a href="../images/hannah/heart_bar_(3).jpg" data-lightbox="heart" data-title="Heart Bar Campground"><img src="../images/hannah/heart_bar_(3).jpg"/></a></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-115.8601107656025, 33.899764412414]
},
properties: {
category: 'Park',
title: 'Joshua Tree National Park',
description: 'Joshua Tree National Park </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-115.700539, 34.559041]
},
properties: {
category: 'Road',
title: 'Route 66',
description: 'Route 66 </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-115.176389, 36.113056]
},
properties: {
category: 'City',
title: 'Las Vegas',
description: 'Route 66 </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-113.376, 37.1156]
},
properties: {
category: 'Campsite',
title: 'Sand Hollow State Park',
description: 'Route 66 </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-112.061667, 36.214722]
},
properties: {
category: 'Park',
title: 'Grand Canyon North Rim',
description: 'Route 66 </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-111.750928, 36.746506]
},
properties: {
category: 'Park',
title: 'Cliff Dwellers',
description: 'Route 66 </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'
}
},
{
type: 'Feature',
geometry: {
  type: 'Point',
coordinates: [-109.044860, 37.001249]
},
properties: {
category: 'Attraction',
title: 'Four Corners',
description: 'Route 66 </br><div class="hannahimages"><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></a><a href="../images/hannah/.jpg" data-lightbox="" data-title=""><img src="../images/hannah/.jpg"/></div>'

},
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
.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
.addTo(map);
});
