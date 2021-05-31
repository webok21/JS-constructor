// Übung lev1_2

class Person {
    constructor(namePerson, agePerson) {
        this.name = namePerson
        this.age = agePerson
    }
    info() {
        return `${this.name} is ${this.age} years old.`
    }

}

let person1 = new Person("Emanuela", 18)

console.log(person1)
console.log(person1.info())


// Übung lev1_3


Person.forEach(persons => {
    document.write(person1)
})

document.querySelector('[type="button"]')