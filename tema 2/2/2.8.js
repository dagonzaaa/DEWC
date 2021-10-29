

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
};


document.write(`<img src="2/f${getRandomIntInclusive(1,3)}.jpg">`)