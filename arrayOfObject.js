const products = [
    {id:01, name: 'apple',price: 15000,noservice: true},
    {id:02, name: 'samsung',price: 10000,noservice: true},
    {id:03, name: 'MI',price: 90000,noservice: true},
    {id:04, name: 'hp',price: 89000,noservice: true},
]
const name = products.map(product => product.name);
const noservice = products.map(p => p.noservice);
console.log(noservice);
console.log(name);
//  use for the for each function 

products.forEach(p => console.log(p.id));
products.forEach(p => console.log(p.name));

// use for the filter 


const expensive = products.filter(p => p.price > 80000);
console.log(expensive);
const users = [
    { id: 1, name: 'rajib' },
    { id: 2, name: 'reza' },
    { id: 3, name: 'ajahar' },
    { id: 4, name: 'bapari' },
];

const user = users.find(user => user.id === 4);

console.log(user);

