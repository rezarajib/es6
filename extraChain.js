const user = {
    id : 5001,
    name : 'abu nasir',
    address : {
        street : {
            first : '54/1 uttor side',
            second : 'chowbaria middle road',
            third : 'nothing else matters life is gone',
        },
        city : 'Dhaka',
    },
}
const user2 = {
    id : 171,
    name : 'rajib reza',
    address : {
        street : {
            first : '555/4 road two bridze',
            second : 'this is chowbaria upper class',
            third : 'this is wrong side the village ',
        },
        city : 'tangail',
    },
}
console.log(user2.address.street.third);

const userChat = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      street: 'Rabbit Hole'
    }
  };
  
  // Without Optional Chaining
  console.log(userChat.address.city); // Output: Wonderland
  
  // With Optional Chaining
  console.log(userChat.contact?.phone); // Output: undefined (No Error)

  const userUpdate = {
    name: 'Bob',
    greet: () => 'Hello!'
  };
  
  // Safe function call using optional chaining
  console.log(userUpdate.greet?.()); // Output: Hello!
  
  // Calling a non-existing function
  console.log(userUpdate.sayGoodbye?.()); // Output: undefined (No Error)

  const users = [
    { name: 'John', age: 25 },
    null,
    { name: 'Jane', age: 22 }
  ];
  
  // Accessing properties safely
  console.log(users[1]?.name); // Output: undefined
  console.log(users[0]?.name); // Output: John
  
  
  