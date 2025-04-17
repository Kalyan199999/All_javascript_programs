// Array destructuring

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr);

let [p,q] = [10,20,30]
console.log(p,q);

[p,q,r=100] = [10,20]
console.log(p,q,r);

let [a,b,c,d,e,f,g,h,i,j] = arr;

[ a, , , , ,b ] = [10,20,30,40,50,60]
console.log(a,b);

[,,a,,b] = [10,20,30,40,50,60]
console.log(a,b);

const {3:a_3} = arr
console.log("index-3 value:"+a_3);

// objects destructuring

let obj = {
    name:"kalyan",
    dept:"cse",
    age:22
}

console.log(obj);

let {name:peru,dept,age} = {...obj};

obj = {...obj,age:53};

// console.log(peru,dept,age);

// console.log(obj);

const address={
    city:"pamarru",
    district:"krishna",
    state:"AP",
    pincode:533412
}

const games = ["cricket","football","chess","tennis"]

obj.address  = address
obj.games = games
console.log(obj);

const { name:ename } = obj
console.log(ename);

const { address:{city,pincode} } = obj
console.log(city , pincode);

const { games:[,g1] } = obj
console.log(g1);