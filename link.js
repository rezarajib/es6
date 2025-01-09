console.log("1");

setTimeout(() => {
 console.log("2");
}, 0);

let promise = new Promise((resolve, reject) => {
 console.log("3");
 resolve();
 console.log("4");
});

promise.then((res) => console.log("5")).catch((err) => console.log("6"));

console.log("7");