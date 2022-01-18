

function lanzamiento() {
	return (Math.floor(Math.random()*(7-1))+1)+(Math.floor(Math.random()*(7-1))+1)
};

function simulacion() {
	dos = 0;
	tres = 0;
	cuatro = 0;
	cinco = 0;
	seis = 0;
	siete = 0;
	ocho = 0;
	nueve = 0;
	diez = 0;
	once = 0;
	doce = 0;
	for (let i = 0; i < 36001; i++) {
		let numeroAleatorio = lanzamiento()
		if (numeroAleatorio==2) {
			dos++
		}else if (numeroAleatorio==3) {
			tres++
		}else if (numeroAleatorio==4) {
			cuatro++
		}else if (numeroAleatorio==5) {
			cinco++
		}else if (numeroAleatorio==6) {
			seis++
		}else if (numeroAleatorio==7) {
			siete++
		}else if (numeroAleatorio==8) {
			ocho++
		}else if (numeroAleatorio==9) {
			nueve++
		}else if (numeroAleatorio==10) {
			diez++
		}else if (numeroAleatorio==11) {
			once++
		}else if (numeroAleatorio==12) {
			doce++
		};
	};
	return [dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez,once,doce]
};

var array = simulacion()
for (let e = 0 ; e < 11 ; e++){
	document.write(`${e+2}: ${array[e]}<br>`)
}
