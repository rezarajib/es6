print10();
print5();
for (let i = 0 ; i < 5 ; i++){
    console.log(i);
}

// console.log('outside',i);

function print5(){
    console.log('print5 inside', 5);
}

const print10 = function(){console.log('inside print10',10)};