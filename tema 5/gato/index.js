window.onload = ()=>{
	var contadores = []
	var lista_fotos = document.getElementsByTagName('img')
	for (let w = 0 ; w<lista_fotos.length ; w++) {
		contadores.push(0)
	}
	
	for ( let i = 0 ; i<lista_fotos.length ; i++){
		lista_fotos[i].addEventListener('click', ()=>{

			if (contadores[i]) {
				contadores[i]++;
			}else{
				contadores[i] = 1;
			}
			let texto = ''
			for ( let e = 0 ; e<lista_fotos.length ; e++){
				texto +='Gato '+(e+1)+': '+contadores[e]+'<br>';
				document.getElementById('contador').innerHTML = texto

			}
		});

	}
}