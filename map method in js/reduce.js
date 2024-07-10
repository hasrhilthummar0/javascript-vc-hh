const myArr = [10, 20, 30];
console.log(myArr);

// let store = myArr.reduce((a,b) =>{
//     console.log(`your a value is ${a} and b value is ${b}`);
//     return a + b;
// },0)
let store = myArr.reduce((a, b) => a + b, 0)
console.log(store);

const ShoppingCart = [
    {
        course: 'javascript',
        price: 999,
        depositAmmount: 13
    },
    {
        course: 'python',
        price: 1499,
        depositAmmount: 13
    },
    {
        course: 'React JS',
        price: 2499,
        depositAmmount: 13
    },
    {
        course: 'Node JS',
        price: 1999,
        depositAmmount: 13
    }
]
let TotalAmmount = ShoppingCart.reduce(function (acc, item) {
    return acc + item.price + item.depositAmmount
},100)
console.log(ShoppingCart); // then print array of object
console.log(TotalAmmount); // then print total ammount of the bill