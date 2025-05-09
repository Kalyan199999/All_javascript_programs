// variables
// objects

obj1 = {
    name:"pavan",
    age:25,
    "dept":"cse"
}

obj2 = {
    college:"IIITM",
    university:"ABV-IIIITM"
}

console.log(obj1);
console.log(obj1['age']);
console.log(obj1.dept);
console.log(obj2);


// update the obj
obj1['class'] = 'B.tech'

console.log(obj1);

console.log(typeof obj1);

var x = 69
console.log(typeof x);

x = false
console.log(typeof x);

// merging the two objs
obj3 = {...obj1 , ...obj2}
console.log(obj3);
console.log(typeof obj3.name);
console.log(typeof obj3.age);
