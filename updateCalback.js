function greeting(greetingHandler,name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log("good morning",name);
}

function greetingNight(name){
    console.log('good Evening',name);
}
function greetingNight(name){
    console.log('good night',name);
}
greeting(greetingHandler,'reza');
greeting(greetingHandler,'rajib');
greeting(greetingNight,'bow how are you');
greeting(greetingNight,'bow you are ready i am free please submit you answer');
// const name = "rajib reza";
// const number = 444;
// const arrayNumber = [33];
// const objectString = {name:'rajib reza',age:22,marride:"yes married"};
// greeting(name);
// greeting(number);
// greeting(arrayNumber);
// greeting(objectString);