mapboxgl.accessToken = 'pk.eyJ1IjoianJoZWFkdCIsImEiOiJjamU4cDUxMm8waXBpMzNtOXViZzA4eHJhIn0.rf8fWYFosO_l_oMGaF6NYQ';

var map= new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    center: [0,50],
    zoom: 1

   });


   /* given a query returns a matching geographic coordinates as search results in
    * carmen geojson format, https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
    */
   var coordinatesGeocoder = function (query) {
       // match anything which looks like a decimal degrees coordinate pair
       var matches = query.match(/^[ ]*(-?\d+\.?\d*)[, ]+(-?\d+\.?\d*)[ ]*$/);
       if (!matches) {
           return null;
       }

       function coordinateFeature(lng, lat) {
           return {
               center: [lng, lat],
               geometry: {
                   type: "Point",
                   coordinates: [lng, lat]
               },
               place_name: 'Lat: ' + lat + ', Lng: ' + lng, // eslint-disable-line camelcase
               place_type: ['coordinate'], // eslint-disable-line camelcase
               properties: {},
               type: 'Feature'
           };
       }

       var coord1 = Number(matches[1]);
       var coord2 = Number(matches[2]);
       var geocodes = [];

       if (coord1 < -90 || coord1 > 90) {
           // must be lng, lat
           geocodes.push(coordinateFeature(coord1, coord2));
       }

       if (coord2 < -90 || coord2 > 90) {
           // must be lat, lng
           geocodes.push(coordinateFeature(coord2, coord1));
       }

       if (geocodes.length === 0) {
           // else could be either lng, lat or lat, lng
           geocodes.push(coordinateFeature(coord1, coord2));
           geocodes.push(coordinateFeature(coord2, coord1));
       }

       return geocodes;
   };

   map.addControl(new MapboxGeocoder({
       accessToken: mapboxgl.accessToken,
       localGeocoder: coordinatesGeocoder
   }));

// Adds location button - Fly to user's location
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
    },
        trackUserLocation: true
}));
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
