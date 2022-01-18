class Person = {
    constructor(name,age){
        this name: name,
        this age: age,
        this stomach = [],
    }
    
    eat(comida) {
        if (this.stomach.length>=10) {
            return `Don't eat more`
        }else{
            this.stomach.push(comida);
        }
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`;
    }
};