

function sumEveryOther(array) {
	let total_par = 0
	let total_inpar = 0

	for (let i = 0; i < array.length; i++) {
		if (i%2 == 0) {
			total_inpar += array[i]
		} else {
			total_par += array[i]
		};
	};
	document.write(`Los pares suman ${total_par} y  los impares ${total_inpar}`)
};



miArray = [1,2,3,4,34,3,44,2]
sumEveryOther(miArray);