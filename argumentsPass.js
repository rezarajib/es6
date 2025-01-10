function sum(a,b,c){
    // console.log(arguments[3]);
    const args = [...arguments];
    console.log(args);
    const total = a + b + c;
    return total;
}// console.log(arguments);

const total = sum(1,2,3,4,5,6,7);
console.log(total);
//  array like object no work push than array object 