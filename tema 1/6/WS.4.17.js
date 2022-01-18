for (var i = 1; i < 11; i++) {
	document.write(`<br>Tabla del ${i}`);
	for (var e = 0; e < 11 ; e++) {
		document.write(`<br>${i} x ${e} = ${i*e}`);
	}
};