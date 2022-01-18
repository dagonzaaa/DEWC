class Lambdasian{
	constructor(name, age, location){
		this.name = name,
		this.age = age,
		this.location = location
	}

	speak(){
		return `Hello my name is ${this.name}, I am from ${this.location}`
	}
}
class Student extends Lambdasian{
	constructor(name, age, location, previusBackground, className, favSubjects){
		super(name, age, location),
		this.previusBackground = previusBackground,
		this.className = className,
		this.favSubjects = favSubjects
	}

	listSubjects(...array_subjects){
		return (`Loving ${array_subjects}`);
	}

	PRAssigment(student, subject){
		return `${student.name} has submitted a PR for ${subject}`
	}

}
