class Parent {
    constructor(params) {
        this.fatherName = "Schwerznegger";
        this.motherName = "Mama";
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullname(){
        return this.name +" "+ this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullname());
console.log(baby2.getFullname());