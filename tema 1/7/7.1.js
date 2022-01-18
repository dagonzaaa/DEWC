

function SUMEVERY(array) {
	let total = 0
	for (let i of array) {
		total += i
	};
	return (total)
};

document.write(SUMEVERY([1,2,3,4,3,2,34,2]))