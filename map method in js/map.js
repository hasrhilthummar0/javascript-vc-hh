const number = [10, 20, 30, 40, 50];
let a = number.map((num) => num * 10)
    .map((num) => num + 20)
    .filter((num) => num >= 200)
console.log(a);