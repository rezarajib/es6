class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}

const rajibReza = new Person("rajib reza:", 27);
console.log(rajibReza);
rajibReza.sleep();