var fechaHoy = new Date();
var fecha85 = new Date();
var fecha187 = new Date();

fecha85.setDate(fechaHoy.getDate()+85)
fecha187.setDate(fechaHoy.getDate()-187)
fecha85.setFullYear(fecha85.getFullYear()+2)
fecha187.setHours(fecha187.getHours()+24)


document.write(`fechaHoy--> ${fechaHoy}<br>fecha85--> ${fecha85}<br>fecha187--> ${fecha187}`)