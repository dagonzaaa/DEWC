function calcularSueldo(ventasBrutas) {
	return `${0.09*ventasBrutas+200}€`
}


var vendedores = [["Nombre", "Sueldo"]]

function darDeAltaVendedor(nombre, ventasBrutas) {
	vendedores.push([nombre,calcularSueldo(ventasBrutas)])
}

darDeAltaVendedor("David", 5000)
darDeAltaVendedor("Ramon", 6000)


document.write("<table bgcolor='black' width=80% text style='text-align:center'>")
for (let i of vendedores) {
	if (i[0]=="Nombre") {
		document.write(`<tr bgcolor="white"><th>${i[0]}</th><th>${i[1]}</th></tr>`)
	} else{
	document.write(`<tr bgcolor="white"><td>${i[0]}</td><td>${i[1]}</td></tr>`)
	};
}
document.write("</table>")