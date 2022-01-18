var array = new Array()

function poner0(array) {
	for (i = 0; i < 10; i++) {
		array.push(0)
	}
}

function cambiarA1(array) {
	array.splice(0,array.length,1,1,1,1,1,1,1,1,1,1)
}

function imprimirArray(array) {
	for (let hueco of array){
		document.write(`${hueco} `)
	}
}