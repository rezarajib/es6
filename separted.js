const max = Math.min(6, 7, 8, 9, 10 , 11);
const numbers = [10,20,30,40,50,60,70];
const arrayItem = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayItem);

//  use separted operator to copy 

const friends = [10,11,34,55,66,66];
const bondu = friends;
bondu.push (12);
console.log(bondu);

//  my friends use separted copy

const myFriends =  ["sajid Hassan","sohelRana","sumon rEZA", "lALMIAHA","abubakkor"];

const myAddFriends = myFriends;
myFriends.push("rajib Reza");
// const indexNumber = myAddFriends[s3];s
const myAddgO = [...myFriends]
console.log(myAddgO)
// console.log(indexNumber);
const numberOne = [1, 2, 3];
const newNumbers = [...numberOne];

console.log(newNumbers); 
