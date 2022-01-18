var clase = [["Nombre","Edad","Primer Trimestre","Segundo Trimestre","Tercer Trimestre"]]

clase.push(["David","18","10","10","10"])
clase.push(["Ramon","19","5","6","7"])
clase.push(["Javi","20","0","1","1"])
clase.push(["Xenxo","18","5","5","5"])

document.write("<table bgcolor='black' width=80% text style='text-align:center'>")
for (let i of clase) {
	if (i[0]=="Nombre") {
		document.write(`<tr bgcolor="white"><th>${i[0]}</th><th>${i[1]}</th><th>${i[2]}</th><th>${i[3]}</th><th>${i[4]}</th></tr>`)
	} else{
	document.write(`<tr bgcolor="white"><td>${i[0]}</td><td>${i[1]}</td><td>${i[2]}</td><td>${i[3]}</td><td>${i[4]}</td></tr>`)
	};
}
document.write("</table>");

            

function verNota(numAlumno,trimestre) {
	let alumno = clase[numAlumno]
	if (trimestre == 1) {
		return alumno[2];
	} else if (trimestre==2) {
		return alumno[3];
	} else if (trimestre==3) {
		return alumno[4];
	}else {
		media = (parseInt(alumno[2])+parseInt(alumno[3])+parseInt(alumno[4]))/3
		return media

	}
};
document.write(verNota(2))