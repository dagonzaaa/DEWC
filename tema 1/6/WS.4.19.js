var ancho = prompt('Ancho:');

document.write(`<table border="0" cellspacing="2" bgcolor="black">`);

for (var e = 0; e < 9; e++){
	document.write(`<tr bgcolor="white" height= "${ancho}">`);

	if (e%2 == 0) {
		for (var i = 0; i < 9; i++) {
			if (i%2 == 0) {
				document.write(`<td width = "${ancho}" bgcolor="black">&nbsp;</td>`);
			};
			else if (i%2 != 0) {
				document.write(`<td width = "${ancho}" bgcolor="white">&nbsp;</td>`);
			};
		};
	};
	else if (e%2 != 0) {
		for (var i = 0; i < 9; i++) {
			if (i%2 == 0) {
				document.write(`<td width = "${ancho}" bgcolor="white">&nbsp;</td>`);
			};
			else if (i%2 != 0) {
				document.write(`<td width = "${ancho}" bgcolor="black">&nbsp;</td>`);
			};
		};
	};
	document.write('</tr>');
};
document.write('</table>');
