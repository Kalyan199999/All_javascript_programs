// Objects

const obj1 = {
    name:'Kalyan',
    age:23,
    'gender':"male",
    degree:'undergraduate'
}

// console.log(obj1)

const car  = new Object();
car.name = 'BMW'
car.color = 'red'
car.price = 1000000
console.log(car);

// console.log( car['price'] );
// console.log( car.color );

// references
const car2 = car
car2.owner = 'kalyan'
console.log( car === car2 );
console.log(car);
console.log(car2);

console.log(Object.entries(car));

console.log(Object.keys(car));

console.log(Object.values(car));

const s = 'aabcacdebc'

const freq = new Object();

for(let i=0;i<s.length;i++)
{
    const ch = s.charAt(i)
    
    if( freq.hasOwnProperty(ch) )
    {
        freq[ch] += 1;
    }
    else{
        freq[ch] = 1;
    }
    
}

console.log(freq);


const obj2 = {
    name:'Kalyan',
    age:23,
    subject :{
        math:80,
        science:78,
        telugu:89
    }
}

console.log(obj2['subject']);
