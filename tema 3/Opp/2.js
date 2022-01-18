class Car{
	constructor(model, milesPerGallon){
		this model = model,
		this milesPerGallon = milesPerGallon,
		this tank = 0,
		this odometer = 0
	}
	fill(galons){
		this.tank += galons
	}

	drive(distance){
		if (this.tank <= 0) {
			return `I ran out of fuel at ${this.odometer} miles!`
		}else{
			this.odometer +=distance
			this.tank -= distance/this.milesPerGallon
		}
	}
}