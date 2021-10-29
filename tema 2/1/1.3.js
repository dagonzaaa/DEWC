function alerta() {
	alert('¡SE ACABO EL TIEMPO!')
};

//setTimeout(alerta,60000);

var segundos = 5;

function muestraSeg() {
	document.write(`${segundos--}<br>`)
	if (segundos>=0) {
		setTimeout(muestraSeg,1000)
	};
};

setTimeout(muestraSeg,1000);

