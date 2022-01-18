var clase = [["Nombre","Edad","Primer Trimestre","Segundo Trimestre","Tercer Trimestre"]];

var alumno = prompt("Nombre,Edad,Primer Trimestre,Segundo Trimestre,Tercer Trimestre");
clase.push(alumno.split(','));

document.write("<table bgcolor='black' width=80% text style='text-align:center'>");

for (let i of clase) {
	if (i[0]=="Nombre") {
		document.write(`<tr bgcolor="white"><th>${i[0]}</th><th>${i[1]}</th><th>${i[2]}</th><th>${i[3]}</th><th>${i[4]}</th></tr>`);
	} else{
	document.write(`<tr bgcolor="white"><td>${i[0]}</td><td>${i[1]}</td><td>${i[2]}</td><td>${i[3]}</td><td>${i[4]}</td></tr>`);
	};
};
document.write("</table>");