	
/*
var date = new Date();

function reload() {
 	location.reload()
};

document.write('<table bgcolor="black"><tr bgcolor="white">')
document.write(`<th>${date.getHours()}</th><th>${date.getMinutes()}</th><th>${date.getSeconds()}</th>`)
document.write('</table></tr>')
setTimeout(reload,1000);
if (date.getHours()==11 && date.getMinutes()==55 && date.getSeconds()==0) {
	alert('ALARMA')
}
*/

function clock() {
	let horaActual = new Date()
	document.body.innerHTML=`<table bgcolor="black"><tr bgcolor="white"><th>${horaActual.getHours()}</th><th>${horaActual.getMinutes()}</th><th>${horaActual.getSeconds()}</th></table></tr>`
	setTimeout(clock,1000)
};
setTimeout(clock,0)
