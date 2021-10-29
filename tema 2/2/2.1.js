

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

document.write(Math.random())
document.write('<br>'+getRandomIntInclusive(100,200))
document.write('<br>'+getRandomIntInclusive((prompt('Primer numero: ')),
	(prompt('Segundo numero: '))))
