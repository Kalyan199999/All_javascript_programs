// Array destructuring

let arr = [1,2,3,4,5,6,7,8,9,10];

let [p,q] = [10,20,30]
console.log(p,q);

[p,q,r=100] = [10,20]
console.log(p,q,r);

let [a,b,c,d,e,f,g,h,i,j] = arr;

let x = [...arr]

console.log(arr);
console.log(x);

let obj = {
    name:"kalyan",
    dept:"cse",
    age:22
}

console.log(obj);

let {name,dept,age} = {...obj};

obj = {...obj,age:53};

console.log(name,dept,age);


console.log(obj);
