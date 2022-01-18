

function calcu_hipo(c1,c2) {
	return (Math.sqrt((c1**2)+(c2**2)))
}


function bucle() {
	do {
		hipo = calcu_hipo((parseInt(prompt('Primer cateto: '))),
		(parseInt(prompt('Segundo cateto: '))))
		alert(hipo);
		document.write(`${hipo}<br>`)
		var condition = prompt('You want to continues?: (y/n)')
	}while(condition == 'y')
};

bucle()


