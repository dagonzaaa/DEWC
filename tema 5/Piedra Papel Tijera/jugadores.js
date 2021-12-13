import * as ppt from './PPT.js'

function crearJugador() {
	let nombre = prompt('Nombre del jugador') 
	var jugador = new ppt.Jugador([nombre,0,0]);

	return jugador
}


export {crearJugador}