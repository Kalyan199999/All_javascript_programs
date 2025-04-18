// Sets

const nums = [1,2,1,2,3,4,5,6,3]
const setNums = new Set( nums )
console.log(setNums);

// Set methods
console.log("Size:" + setNums.size);

setNums.add(10)
setNums.add(20)
console.log(setNums);

setNums.delete(20)
console.log(setNums);
setNums.delete(200)
console.log(setNums);

if( setNums.has(20) )
    console.log("20 is present");
else
    console.log("20 is not present");

setNums.forEach( (num) => console.log(num) )

setNums.clear()
console.log(setNums);


const nums1 = [1,2,1,2,3,4,5,6,7,4,4,4]
const nums2 = [10,20,1,4,30,50,6]
const setNums1 = new Set( nums1 )
const setNums2 = new Set( nums2 )


// console.log(setNums1.union(setNums2));
// console.log( setNums1.intersection(setNums2) );
// console.log( setNums1.difference(setNums2) );