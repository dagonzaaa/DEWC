var columnas = prompt('Columnas:');
var filas = prompt('Filas:');
var alto = prompt('Alto:');
var ancho = prompt('Ancho:');

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);
for (var e = 0; e<filas; e++){
	document.write(`<tr bgcolor="white" height= "${alto}">`);

	for (var i = 0; i<columnas; i++) {
		document.write(`<td width = ${ancho}">&nbsp;</td>`);
	};

	document.write('</tr>');
};
document.write('</table>');
