var grados = prompt('Angulo: ');


function GradosRadianes(grados) {
	return (grados*Math.PI/180)
};

document.write(Math.sin(GradosRadianes(grados)));
document.write('<br>'+Math.cos(GradosRadianes(grados)));
document.write('<br>'+Math.tan(GradosRadianes(grados)));