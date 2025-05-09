// Variables

var a = 69
{
    var a = "Pavan";
    var global = "Global Variable"
}
console.log(a);

let  b = a
{
    let b = "kalyani"
    console.log(b);
    
}
console.log(b);
console.log(global);

const pi = 3.14

{
    let r = 5
    console.log("Area:",pi*r*r);
}

const c = undefined
console.log(c);

try {
    c = "value is changing"
    console.log(c);
    
} catch (error) {
    console.log("You can't change the constant");
    // console.log(error);
    
    
}