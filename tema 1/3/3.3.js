

function calculateSupply(age, amount_per_day){
	return(`You will need ${(120-age)*365*amount_per_day}$ to last you until the ripe old age of ${(120-age)}`);
};

document.write(`<br>${calculateSupply(14,5)}`);
document.write(`<br>${calculateSupply(23,6)}`);
document.write(`<br>${calculateSupply(65,8)}`);
