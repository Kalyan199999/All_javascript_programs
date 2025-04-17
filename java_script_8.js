// Spread Operator

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

let arr = [arr1,arr2]
console.log(arr);

arr = [...arr1, ...arr2];
console.log(arr);

const name = "pavankalyan"
console.log(...name);
