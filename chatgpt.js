class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log(this.name);
    }
  }
  const person = new Person('Alice');
  person.greet(); // Output: Alice
  