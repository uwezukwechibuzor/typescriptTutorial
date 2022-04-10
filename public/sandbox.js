"use strict";
const character = 'Daniel';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
//function
let greet;
greet = () => {
    console.log('Hello, Again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(6, 2, 8);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetA = (user) => {
    console.log(`${user.name} says hello`);
};
