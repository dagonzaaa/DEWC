class Gato{
	constructor(tiredness,hunger,loneliness,happiness){
		this.tiredness = tiredness,
		this.hunger = hunger,
		this.loneliness = loneliness,
		this.happiness = happiness
	}
	feed(){
		this.hunger -= 1
	}
	sleep(){
		this.tiredness -= 1
	}
	pet(){
		this.happiness += 1
		this.loneliness += 1
	}
	status(){
		feelings=['Miau']
		if (this.tiredness<0) {
			feelings.push('Miau');
		}else if (this.tiredness = 0){
			feelings.push('Miau,Miau');
		}else if (this.tiredness > 0){
			feelings.push('Miau,Miau,nygga');
		}
		if (this.hunger<0) {
			feelings.push('Miau,Miau,brr');
		}else if (this.hunger = 0){
			feelings.push('Miau,Where are the food?');
		}else if (this.hunger > 0){
			feelings.push('Miau,Miau,I want to eat');
		}
		if (this.happiness<0) {
			feelings.push('Miau,Miau,Me independizo');
		}else if (this.happiness = 0){
			feelings.push('Miau,Miau');
		}else if (this.happiness > 0){
			feelings.push("Miau,I'm the boss");
		}
		if (this.loneliness<0) {
			feelings.push('Miau,Miau');
		}else if (this.loneliness = 0){
			feelings.push('Miau,Where are the people??');
		}else if (this.loneliness > 0){
			feelings.push("Miau,I have nobody for my own I'm so lonely, I'm Mr. Lonely");
		}
		return feelings
	}
}