// Array methods

const numbers = [1,2,3,4,5,6,7,8,9,10];

// foreach method
console.log("For Each method");
numbers.forEach((number)=> console.log(number));

// Map method
console.log("Map method");
const numbersSquared = numbers.map((number)=> number*number);
console.log(numbersSquared);

// filter() – Return only items that match a condition
console.log("Filter method");
const evenNumbers = numbers.filter((number)=> number%2==0);
console.log(evenNumbers);

// reduce method->Reduce array to a single value
console.log("Reduce method");
const sum = numbers.reduce((accumulator, currentValue)=> accumulator+currentValue , 0);
console.log(sum);

const nums = [1,2,3,2,3,2,4,5]
// find() – Return the first item that matches a condition
console.log("Find method");
const firstNumber = nums.find((number)=> number==2);
console.log(firstNumber);

// some() – Check if any item matches
console.log("Some method");
console.log( numbers.some(num => num % 2 === 0) ); // true

// every() – Check if all items match
console.log("Every method");
console.log(numbers.every(num => num % 2 === 0));

// includes() – Check if a value exists
console.log(numbers.includes(9));

// indexOf() – Get index of a value
console.log(nums.indexOf(2));