// Arrow Functions

const addition = (a,b)=>{
    return a+b;
}

const subtraction = (a,b)=> a-b ;

const multiplication = (a,b)=> {
    return a*b;
}

const division = (a,b) =>{
    return a>0? a/b : "Invalid Input"
}

console.log(addition(5,6));
console.log(subtraction(5,6));
console.log(multiplication(5,6));
console.log(division(5,6));