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

    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-116.9325, 36.5322]
    },
    properties: {
      category: 'Park',
      title: 'Death Valley National Park',
      description: 'Death Valley </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
//Boston-Canada Dec 2017
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-71.1248, 42.3821]
    },
    properties: {
      category: 'City',
      title: 'Cambridge, MA',
      description: 'Birthday and Christmas in Cambridge, Massachusetts </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-72.0112, 41.4449]
    },
    properties: {
      category: 'Attraction',
      title: 'Foxwoods Casino',
      description: 'Gambling in Connecticut </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-79.0849, 43.0895]
    },
    properties: {
      category: 'Park',
      title: 'Niagara Falls',
      description: 'Niagara Falls, Canada </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-80.0850, 42.1292]
    },
    properties: {
      category: 'City',
      title: 'Erie',
      description: 'Pensylvania </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
      description: 'Massachusetts </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-71.342, 42.4384]
    },
    properties: {
      category: 'Park',
      title: 'Walden Pond',
      description: 'Massachusetts </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-73.9696, 40.7848]
    },
    properties: {
      category: 'City',
      title: 'New York City',
      description: 'New York, NY </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-95.3499, 40.0819]
    },
    properties: {
      category: 'Park',
      title: 'Big Lake, MO',
      description: 'Chrsitmas in Kansas/Missouri </br><div class="images"><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a><a href="../images/jordan/.jpg" data-lightbox="" data-title=""><img src="../images/jordan/.jpg"/></a></div>'
    
  },
    }]
    };

// add jordan's markers to map
geojson.featuresjordan.forEach(function(marker) {
// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'markerjordan';
// make a marker for each feature and add to the map
new mapboxgl.Marker(el, {
  offset: [0, -25]
})
.setLngLat(marker.geometry.coordinates)
.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description.category + '</p>'))
.addTo(map);
});
