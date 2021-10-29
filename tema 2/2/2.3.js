

function calcu_hipo(c1,c2) {
	return (Math.sqrt((c1**2)+(c2**2)))
}

document.write(calcu_hipo((parseInt(prompt('Primer cateto: '))),
	(parseInt(prompt('Segundo cateto: ')))));