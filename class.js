const products = [
    {id: 1 , name : 'Dell',price: 85000},
    {id: 2 , name : 'lenovo',price: 90000},
    {id: 3 , name : 'hp',price: 100000},
    {id: 4 , name : 'apple',price: 190000},
]

console.log(products);

// has some property methods 

// class Products  {
//     country = 'bangladesh';
//     speak(talk){
//       console.log(`taking about me please Allah help me ${talk}`)
//     }
// }
// const lenovo = new Products();
// console.log(lenovo);
// some had property methods
class Products {
    country = 'india';
    constructor(name){
        this.name = name;
    }
    speak(talk){
      console.log(`this is taking method ${talk}`);
    }
}
const lenovo = new Products('hkhjkhkjhkh');
console.log(lenovo);
lenovo.speak('please help me please help me ')

class Teacher {
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir the math boss');
    }
}

const jewelSir = new Teacher('jewelSir','all subject');
console.log(jewelSir);
const jeSir = new Teacher('Sir','MAth');
console.log(jeSir);