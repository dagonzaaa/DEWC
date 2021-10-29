function invierteCadena(cad_arg) {
	return cad_arg.split("").reverse().join("");
};

document.write(invierteCadena("Hola me llamo david"),'<br>')



function inviertePalabra(cad_arg) {
	return cad_arg.split(" ").reverse().join(" ");
};
document.write(inviertePalabra("Hola me llamo david"),'<br>')


function encuentraPalabraMasLarga(cad_arg) {
	let array = cad_arg.split(" ");
	let larga = ''
	for (i of array) {
		if (i.length>larga.length){
			larga = i
		}
	}
	return larga.length
};
document.write(encuentraPalabraMasLarga("Hola me llamo david"),'<br>')

function fltraPalabrasMasLargas(cad_arg, i) {
	let array = cad_arg.split(" ");
	let con = 0
	for (j of array) {
		if (j.length>i){
			con++
		}
	}
	return con
};
document.write(fltraPalabrasMasLargas("Hola me llamo david", 2),'<br>')

function cadenaBienFormada(cad_arg) {
	for (let i=0 ; i < cad_arg.length-1 ; i++ )
		if (i==0){
			cad_arg[0]=cad_arg[0].toUpperCase()
		};
	return cad_arg
};
document.write(cadenaBienFormada("hola me llamo david"),'<br>')
