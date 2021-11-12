var texto = "hola Me llamo @david"
var mayuscula = /^[A-Z]+$/;
var iChars = /[!@#$%^&]/;
var correo = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


function validarMayuscula(txt) {
	for (let i of txt){
		if (mayuscula.test(i)) {
			return true
		}
	}
	return false
}

function validarCaracteresEspeciales(txt){
	for (let i of txt){
		if (iChars.test(i)) {
			return true
		}
	}
	return false
}

function validarCorreo(txt) {
	return correo.test(txt)
}

function validarTarjetaCredito(txt) {
	// body...
}
