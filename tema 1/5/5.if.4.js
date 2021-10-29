var hermanos = prompt('Numero de hermanos: ')
var cantidad = prompt('Cantidad: ')


if (hermanos>3) {
	document.write(cantidad*0.85)
}
else if (hermanos<3 && hermanos!=0) {
	document.write(cantidad*0.95)
}
else if (hermanos==0) {
	document.write(cantidad)
}