mapboxgl.accessToken = 'pk.eyJ1IjoianJoZWFkdCIsImEiOiJjamU4cDUxMm8waXBpMzNtOXViZzA4eHJhIn0.rf8fWYFosO_l_oMGaF6NYQ';

var featuremap= new mapboxgl.Map({
      container: 'featuremap',
      style: 'mapbox://styles/mapbox/basic-v9',
      center: [-110,40],
      zoom: 5

     });

 var map1= new mapboxgl.Map({
       container: 'map1',
       style: 'mapbox://styles/mapbox/basic-v9',
       center: [90,50],
       zoom: 4

      });
 var map2= new mapboxgl.Map({
        container: 'map2',
        style: 'mapbox://styles/mapbox/basic-v9',
        center: [-104,39],
        zoom: 5
      });

var map3= new mapboxgl.Map({
          container: 'map3',
          style: 'mapbox://styles/mapbox/basic-v9',
          center: [-3,40],
          zoom: 5

      });
