function greeting(greetingHandler,name){
    // console.log(greetingHandler(name));
    greetHandler(name);
}
// greeting('rajib reza');
// const numhber = [45];
// greeting(numhber);
// const laptop = {id:1,name:'mackbook',price:44444,custom:true};
// greeting(laptop);
function greetHandler(name){
    console.log('good morning',name);
}

function greetEvening(name){
    console.log('good evening',name);
}

function greatNight(name){
    console.log('good night wife my bow bithi reza',name);
} 

greeting(greetHandler,'tom hanks');
greeting(greetHandler,'rajib reza');
greeting(greetEvening,'hi how are man do you work and study bithi reza');
greeting(greatNight,'bow reza');