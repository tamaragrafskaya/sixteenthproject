class Student {
    #age = 0;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }



    printInfo() {
        return ` Имя: ${this.name}, Возраст: ${this.#age}`
    }
    haveBirthday() {
        return this.#age++
    }

}



const student1 = new Student("Илья", 27);
const student2 = new Student("Ильгиза", 34);

student1.printInfo();
console.log(student1.printInfo());

student1.haveBirthday();
console.log(student1.haveBirthday());