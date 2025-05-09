// Rest Operator

// In Functions:It gathers the remaining arguments into an array
// In Array:It Collect the remaining elements into an new array
// In Objects:It Collect the remaining properties into an new object

const arr1 = [1, 2, 3, 4, 5];
// This is rest operator is written before the assignment operator
// Spread operator is written after the assignment operator

const [a ,...others ] = arr1

console.log(others);

const cities = {
    city1:"vijayawada",
    city2:"hyderabad",
    city3:"bangalore",
    city4:"chennai",
    city5:"delhi",

    address:{
        city6:"vizag",
        city7:"kakinada"
    },

    array:[10,20,30,40,50]

}

const {city1,...otherCities } = cities
console.log(otherCities);
console.log(otherCities.array);


function add(a,b,...others) {
    console.log(a);
    console.log(b);
    console.log(others);
    console.log(a+b);
}
add(...otherCities.array)