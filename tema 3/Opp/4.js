class Lambdasian{
	constructor(name, age, location){
		this name = name,
		this age = age,
		this location = location
	}
	speak(){
		return `Hello my name is ${this.name}, I am from ${this.location}`
	}
}

class Instructor extends Lambdasian{
	constructor(name, age, location, specialty, favLanguage,){
		super(name, age, location),
		this specialty = specialty,
		this favLanguage = favLanguage,
		this catchPhrase = "Don't forget the homie",
	}
	demo(string){
		return `Today we are learning about ${string}`
	}
	grade(student, subject){
		return `${student.name} receives a perfect score on ${subject}`
	}
}