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
