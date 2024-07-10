// array is a collection of items

let StudenName = ["Harshil", "Utsav", true, undefined];
console.log(StudenName);
console.log(StudenName.length);

console.log(StudenName[0]);

StudenName[0] = " Ujas";

console.log(StudenName);
StudenName[2] = false;
console.log(StudenName);

console.table(StudenName);

for (let i = 0; i < StudenName.length; i++) {
  console.log(StudenName[2]);
}

// pratice..

let studentMarks = [90, 80, 49, 90, 89, 88];
let sum = 0;

for (let i = 0; i < studentMarks.length; i++) {
  sum += studentMarks[i] / studentMarks.length;
}
console.log(sum);

let Price = [250, 645, 300, 900, 30];

for (let i = 0; i < Price.length; i++) {
  let Discount = Price[i] / 10;
  Price[i] -= Discount;
}
console.log(Price);

let company = ["Oppo", "Iphone", "MI"];
console.log(company.push("Vivo"));
console.log(company.pop());
console.log(company);

console.log(company.length);
console.log(company.toString());

let Surname = ["Thummar", "Rakholiya", "Gajera", "Talaviya"];
let name = ["harshil", "rudara", "rajani", "ankit"];

let joint = Surname.concat(name);
console.log(joint);

console.log(Surname);
console.log(Surname.unshift("Bhuva"));
console.log(Surname);

console.log(Surname.shift());
// console.debug(Surname);

console.log(Surname);
console.log(Surname.slice(1, 3));

console.log(Surname);

let Company = ["BloomBerg", "Microsoft", "Uber", "Goggle", "IBM", "NEtflix"];
console.log(Company);
console.log(Company.shift());
console.log(Company.splice(2, 1, "Ola"));
console.log(Company.push("Amazon"));
console.log(Company);
console.log(Company);  
console.log(Company);