var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


function encuentraPos(pos) {
  var crd = pos.coords;
  let latitud = crd.latitude;
  let longitud = crd.longitude;
  let latitud2 = latitud;
  let longitud2 = longitud;

  document.write(`<br>Your current position is:`);
  document.write(`<br>Latitude : ${latitud}`);
  document.write(`<br>Longitude: ${longitud}`);
  document.write(`<br>Distancia: ${Math.sqrt((latitud-latitud2)+(longitud-longitud2))}`);
  latitud2 = latitud;
  longitud2 = longitud;
};

function error(err) {
  alert(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.watchPosition(encuentraPos, error);
