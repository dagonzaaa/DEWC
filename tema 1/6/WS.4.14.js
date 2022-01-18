var colum = prompt('Columnas:');
var ancho = prompt('Ancho:');
var alto = prompt('Alto:');


document.write(`<table border="0" cellspacing="2" bgcolor="black"><tr bgcolor="white" height= "${alto}">`);

var count = 0;

while (count<colum){
	if (count%2 == 0) {
		document.write(`<td width = ${ancho}" bgcolor="black">&nbsp;</td>`);
	} ;
	else if (count%2 != 0) {
		document.write(`<td width = ${ancho}" bgcolor="white">&nbsp;</td>`);
	} ;
	count++;
};

document.write('</tr></table>');