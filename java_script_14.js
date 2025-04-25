// Date Object

const date = new Date();

console.log(date);

// Indian date and time format
console.log(date.toLocaleDateString('hi-In'));
console.log(date.toLocaleTimeString('hi-In'));

// English countries date and time format
console.log(date.toLocaleDateString('en-Us'));
console.log(date.toLocaleTimeString('en-Us'));

// Date and Time formats
console.log("Time and formate is:"+date.toTimeString());
console.log("Only date is:"+date.toDateString());

console.log("---------------------------------------------------------");

console.log("Current Date is:" + date.getDate());
console.log("Current month is:"+ (date.getMonth()+1) );
console.log("Current Year is:"+date.getFullYear());
console.log("Time is:"+ date.getTime());
console.log("Hours is:"+date.getHours());
console.log("Minutes is:"+date.getMinutes());
console.log("Seconds is:"+date.getSeconds());

const ownDate = new Date("May-19-1999")
console.log(ownDate);