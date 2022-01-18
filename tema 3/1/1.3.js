function lanzamiento() {
	return Math.floor(Math.random()*(7-1))+1
};

function simulacion() {
	uno = 0
	dos = 0
	tres = 0
	cuatro = 0
	cinco = 0
	seis = 0
	for (var i = 0; i < 6001; i++) {
		let numeroAleatorio = lanzamiento()
		if (numeroAleatorio==1) {
			uno++
		}else if (numeroAleatorio==2) {
			dos++
		}else if (numeroAleatorio==3) {
			tres++
		}else if (numeroAleatorio==4) {
			cuatro++
		}else if (numeroAleatorio==5) {
			cinco++
		}else if (numeroAleatorio==6) {
			seis++
		};
	};
	return (`1: ${uno}<br>2: ${dos}<br>3: ${tres}<br>4: ${cuatro}<br>5: ${cinco}<br>6: ${seis}`)
};

document.write(simulacion())