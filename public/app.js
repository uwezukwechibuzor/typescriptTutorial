"use strict";
//classes 
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
    get() {
        return this;
    }
}
const invOne = new Invoice('Daniel', 'Programmer', 3000);
console.log(invOne.format());
console.log(invOne);
console.log(invOne.get());
const form = document.querySelector('.new-item-form');
//inputs 
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
