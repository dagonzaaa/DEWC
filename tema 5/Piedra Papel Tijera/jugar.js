import * as ppt from "./PPT.js"
import * as jugador from "./jugadores.js"

window.onload = function(){
    document.getElementById('jugar').addEventListener('click', jugar)
}

function jugar() {
    let jugador1 = jugador.crearJugador()
    let jugador2 = jugador.crearJugador()
    var partida = new ppt.Juego(jugador1, jugador2);
    document.getElementById('partida').innerHTML = ''
    while ((jugador1.rondas_ganadas<3) && (jugador2.rondas_ganadas<3)) {
    	jugador1.mano();
    	jugador2.mano();
        let resultado = partida.ronda()
        alert(jugador1.tirada+" vs "+jugador2.tirada+ "==>" + resultado);
    	document.getElementById('partida').innerHTML += jugador1.tirada+" vs "+jugador2.tirada+ "==>" + resultado+  "<br>";
    }
    if (jugador1.rondas_ganadas==3) {
        document.getElementById('partida').innerHTML += "<h1>Gano "+jugador1.nombre+"</h1>"
    }else{
        document.getElementById('partida').innerHTML += "<h1>Gano "+jugador2.nombre+"</h1>"
    }
}
