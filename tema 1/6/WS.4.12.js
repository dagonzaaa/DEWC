var colum = prompt('Columnas:');
var ancho = prompt('Ancho:');
var alto = prompt('Alto:');


document.write(`<table border="0" cellspacing="2" bgcolor="black"><tr bgcolor="white" height= "${alto}">`);

for (var i = 0; i<colum; i++) {
	if (i%2 == 0) {
		document.write(`<td width = ${ancho}" bgcolor="black">&nbsp;</td>`)
	}else if (i%2 != 0) {
		document.write(`<td width = ${ancho}" bgcolor="white">&nbsp;</td>`)
	};
};

document.write('</tr></table>');