// Übung lev1_2

class Person {
    constructor(namePerson, agePerson, passedPerson) {
        this.name = namePerson
        this.age = agePerson
        this.passed = passedPerson
    }
    info() {
        return `${this.name} is ${this.age} years old.`
    }

}

let person1 = new Person("Emanuela", 18, false)

console.log(person1)
console.log(person1.info())


// Übung lev1_3

const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const examChecked = document.getElementById('exam');
const personList = document.getElementById('list');



function addNewPerson() {
    let newPerson = new Person(nameInput.value, ageInput.value, examChecked.checked)

    if (newPerson.passed) {
        personList.innerHTML += `<li>${newPerson.name}, ${newPerson.age} years old.</li>`
    } else {
        personList.innerHTML += `<li class="failed">${newPerson.name}, ${newPerson.age} years old.</li>`
    }
}

