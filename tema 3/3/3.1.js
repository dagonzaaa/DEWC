var numeros = []

function masGrande(array) {
	let mayor = array[0];
	for (let i of array) {
		if (i>mayor) {
			mayor=i;
		};
	};
};

function masLarga(array) {
	let mayor = array[0];
	for (let i of array) {
		if (i.length>mayor.length) {
			mayor=i;
		};
	};
};

function buscaPares(array) {
	arrayPar=[]
	for (var i of array) {
		if (i%2===0) {
			arrayPar.push(i)
		}
	}
	return arrayPar
}
function buscaImpares(array) {
	arrayImpar=[]
	for (var i of array) {
		if (i%2!=0) {
			arrayPar.push(i);
		}
	}
	return arrayImpar;
};

function buscarIs(array) {
	return array.index('is');
};