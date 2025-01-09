let fruits = ["apple","banna","mango","lemon"];
console.log(...fruits);

const circle = {
    radius : 10,
};

const clonedCircle = {...circle};
console.log(clonedCircle);

//  two arrow add 

let fruitsOne = ["rajib","reza"];
let fruitTwo = ["bow", "bithi"];
let nameAvarage = [...fruitsOne, ...fruitTwo];
console.log(nameAvarage);

//  two object add the es6

const nameInformation = {
    name: "sajeedHassan",
    age : 33,
    bsc : "diu unversity",
    job : "goverment job",
}

const marriedInformation = {
      married : false,
}

const totalCircle = {
    ...nameInformation,
    ...marriedInformation,
}

console.log(totalCircle);