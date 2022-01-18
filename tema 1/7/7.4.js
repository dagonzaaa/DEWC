function combineTwoArrays (array1,array2) {
	let array = [...array1, array2]
	return array
};

function combineTwoArrays2 (array1,array2) {
	let array = array1.concat(array2)
	return array
};




miArray = [1,2,3,4]
otraArray = [5,6,7,8]
document.write(combineTwoArrays(miArray,otraArray))