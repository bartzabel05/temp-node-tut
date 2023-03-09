// const amount=9;

// if(amount<10)
// console.log("Small Number");
// else
// console.log("Large Number");

// console.log(`Hi this is my first Node App`);
// console.log(__dirname);
// setInterval(()=>{
//     console.log("Hello World");
// },1000)

// Modules

// require
const names=require('./names');
// or destructure using {john,peter}
const sayHi=require('./utils');

const data=require('./alt-flavor');
console.log(data);

require('./mind-grenade');

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);