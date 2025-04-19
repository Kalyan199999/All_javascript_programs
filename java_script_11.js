// Maps

const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')

console.log(map)

// console.log(map.keys());
// console.log(map.values());

const s = "abcabbabc"

const freq = new Map()

// Map Methods

for (let i = 0; i < s.length; i++) {
    freq.set( s[i], (freq.get(s[i]) || 0) + 1)
}

console.log(freq);

console.log(freq.get('a'));

const keys = freq.keys()

console.log(keys);

console.log(freq.values());

console.log(freq.size);

if(freq.has('a'))
{
    console.log('key is present');
}
else{
    console.log('key is not present');
}


for( let key of keys)
{
    console.log(key +"->"+freq.get(key));
}
console.log("--------------------------");

for( let [key, value] of freq)
{
    console.log(key +"->"+value);
}