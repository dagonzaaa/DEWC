function ordenar(a,b) {
	if (a%2 == 0 && b%2 != 0) {
		return -1
	}else if (a%2 != 0 && b%2== 0) {
		return 1
	}else {
		return a-b
	}
}
function comparar(a,b) {
	if (a<b) {
		return -1
	}else if (a>b) {
		return 1
	}else{
		return 0
	}
}

function paresImpares() {
	let lista = []
	for (var i = 0; i < 101; i++) {
		lista.push(Math.floor(Math.random()*(1001-1))+1)
	}
	document.write(lista+"<br>")
	
	document.write(lista.sort(ordenar));
};

paresImpares();