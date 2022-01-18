function maximo(num1,num2,num3,num4) {
	let list = [num1,num2,num3,num4];
	let mayor = num1;
	for (numero of list){
		if (mayor<numero) {
			mayor = numero;
		};
	};
	return mayor
};

var numeros = prompt("Escribe 4 numeros separados por comas(',')");

var lista = numeros.split(',');

document.write(`Los numeros introducidos son: ${lista}<br>`);

document.write(`El numero mas grande es: ${maximo(lista[0],lista[1],lista[2],lista[3])}`)