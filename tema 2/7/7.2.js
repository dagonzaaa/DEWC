var platform = new H.service.Platform({
  'apikey': 'CdAC6yjS_LrnUtLEmN3y7PHQfT4vmHbWnU3kUmTOZJI'
});

var maptypes = platform.createDefaultLayers();
var crd = navigator.geolocation.coords;

function sucess(pos) {
  //crear mapa
  var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.vector.normal.map,
  {
    zoom: 15,
    center: { lng: pos.longitude, lat: pos.latitude }
  });

  //crear icono
  var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="yellow" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">TU</text></svg>';
  var icon = new H.map.Icon(svgMarkup),
    coords = {lat: crd.latitude, lng: crd.longitude},
    marker = new H.map.Marker(coords, {icon: icon});

  //añadir marcador
  map.addObject(marker);
  map.setCenter(coords);

};

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
};

function calculateRouteFromAtoB(platform) {
  var router = platform.getRoutingService(null, 8),
      routeRequestParams = {
        routingMode: 'fast',
        transportMode: 'car',
        origin: '52.5160,13.3779', // Brandenburg Gate
        destination: '52.5206,13.3862', // Friedrichstraße Railway Station
        return: 'polyline,turnByTurnActions,actions,instructions,travelSummary'
      };

  router.calculateRoute(
    routeRequestParams,
    onSuccess,
    onError
  );
};

function onSuccess(result) {
  var route = result.routes[0];

  addRouteShapeToMap(route);
};

function onError(error) {
  alert('Can\'t reach the remote server');
};


navigator.geolocation.getCurrentPosition(sucess, error);
