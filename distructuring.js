const actor = {
    name: 'myBow',
    age : 45,
    phone : '3333333',
    money : 33333333,
}
// if right side is an object left side of destructuring will be object as well

const {phone,age:young} = actor
console.log(phone,young);