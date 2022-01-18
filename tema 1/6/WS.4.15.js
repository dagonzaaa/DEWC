var num_adivinar = parseInt(prompt('Numero a adivinar: '));
var num = parseInt(prompt('Numero:'));


while (num != num_adivinar){
	if (num<num_adivinar){
		alert('El numero introducido es menor');
	};
	if (num>num_adivinar){
		alert('El numero introducido es mayor');
	};
	num = prompt('Numero:');
};

document.write('<h1>GANASTE</h1>');