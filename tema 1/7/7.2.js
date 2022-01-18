

function addOnlyNum(array) {
	let total = 0
	for (let i of array ) {
		if (typeof i == 'number') {
			total += i
		};
	};
	return (total)
};


miArray =[1,'cat',3,4,'dog',2,2]
document.write(addOnlyNum(miArray))

console.log(typeof 3)