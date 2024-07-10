let arr = [10, 30, 40];
let max = 0;
for (let index = 0; index < arr.length; index++) {
  if (arr[index] > max) {
    max = arr[index];
  }
}
console.log(max);

let arr1 = [90, 230, 303, 5003, 230];
let min = arr1[0];

for   (let index = 0; index < arr1.length; index++) {
  if (arr1[index] < min) {
    min = arr1[index];
  }
}
console.log(min);
