//  data access 

const data = [{id:171-35-1830,name:'rajib reza',address:'AllahJane'}];

 console.log(data[0].address);
// console.log(...data[0]);

const products = {
    count : 5000,
    data : [
        {id : 1, name : 'lenovo Laptop', price : 65000},
        {id : 1, name : 'mackbook', price : 165000},
        
    ]
};

console.log(products.data[1].price);

const myInformation = {
    myTag : 00001,
    data : [
        {id : 01, name: 'rajib Reza', campus: 'diu',job: 'word swe', msc : false},
    ]
}

console.log(myInformation.data[0].name);


const user = {
    id : 171-35-1830,
    name : 'rajib reza',
    car : [{
        carName : 'lamborgini',
        carSize : 'avargage',
        address : {
            street : {
             first : '54/1 uttara side',
             second : 'chowbaria middle road',
            },
            city : 'dhaka'
        }
    }]
    

}

console.log(user.car[0].carName);