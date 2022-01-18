// Initialize the platform object:
var platform = new H.service.Platform({
  'apikey': 'CdAC6yjS_LrnUtLEmN3y7PHQfT4vmHbWnU3kUmTOZJI'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var crd = navigator.geolocation.coords;
function encuentraPos(pos) {
  var crd = pos.coords;

  var map = new H.Map(
  document.getElementById('mapContainer'),
  maptypes.vector.normal.map,
  {
    zoom: 15,
    center: { lng: crd.longitude, lat: crd.latitude }
  });
}
function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(encuentraPos, error);