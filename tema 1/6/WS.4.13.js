var colum = prompt('Columnas:');
var ancho = prompt('Ancho:');
var alto = prompt('Alto:');


document.write(`<table border="0" cellspacing="2" bgcolor="black"><tr bgcolor="white" height= "${alto}">`);

var count = 0
while (count<colum){
	document.write(`<td width = ${ancho}">&nbsp;</td>`);
	count++
};



document.write('</tr></table>');