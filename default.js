function add(num1,num2){
    const result = num1 + num2;
    // console.log(num1,num2, result);
    return result;
}
const finalOutput = add(10,30);
console.log(finalOutput);
const a = 10;
const b = 20;
const result = 'the sum of' +  a  +  'and'  + b +  'is' + (a + b);
const math =   `the sum of ${a} and ${b} is ${a + b}`
console.log(math);
const myName = `i am
rajib
reza
my name is rajib reza
`
console.log(myName);

const myArticle = `
hi
i 
am 
rajib reza
Please Allah HElp me 
`
console.log(myArticle);

const firstValue = 10;
const secondValue = 20;
const finalResult = `the sum of ${a} the sum second value ${b} is ${a + b}`

 console.log(finalResult);

//  function expression
const add2 = function(a,b){
    return a + b;
}
const sum = add2(20,10);
console.log(sum);

//  arrow function
const add3 = (a, b) => a + b

const output = add3(30,20);
console.log(output);

//  arrow function multiple multipation 

const add4 = (num1,num2,num3,num4) => num1 * num2* num3 * num4;
const finalAdd = add4(1,2,3,4);
console.log(finalAdd);

const nameDisplay = () => console.log("rajib reza");

nameDisplay();
// arrow function 

const myData =  () => console.log("bow reza");

myData();

const add5 = (value1,value2,value3) => (value1 * value2 * value3);
const valueOutput =  add5(1,2,3);
console.log(valueOutput);

const getAge = (person) => person.name
const studentInformation = {
    name : "reza",
    age : 27,

}
const name = getAge(studentInformation);

console.log(name);

//  use arrow function index number 

const getThirdIndex = numbers => numbers[3];
const third = getThirdIndex([1,3,4,5,56,6,6]);
console.log(third);


//  no parameters

const getPI = () => Math.PI;

console.log(getPI());

// const money = 25;
// let rich = money * 3;
// console.log(rich);
// function add(num1,num2){
//     const result = num1 + num2;
//     console.log(num1,num2,result)
//     return result;

// }
// add(4,5);

// const count = 10;
//  countPlus = count + 33;
// console.log(countPlus);

//  large arrow function for the 

const doMath = (x,y,z) => {
  const sum = x + y + z;
  const multi = x * y * z;
  const result = sum  + multi;
  return result;
}

 const finalOutputData = doMath(2,3,4);
 console.log(finalOutputData);
