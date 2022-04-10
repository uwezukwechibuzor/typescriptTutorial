import { HasFormatter } from '../interfaces/HasFormatter.js'

//classes 
 export class Invoice implements HasFormatter {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d:string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }  
    get() {
        return this
    }

}

//generics
//with objects
const addUID = <T>(obj: T) => {
 let uid = Math.floor(Math.random() * 100);
 return {...obj, uid}
}

const addUIDD = <T extends {name: string}>(obj: T) => {
 let uid = Math.floor(Math.random() * 100);
 return {...obj, uid}
}

let docOne = addUID({name: 'Daniel', age: 34});
let docTwo = addUIDD({name: 'Daniel', age: 34});
console.log(docOne.age)

//with interface
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'daniel',
    data: {name: 'daniel'}
}

const docFour: Resource<string[]> = {
    uid: 1,
    resourceName: 'daniel',
    data: ['daniel', 'programming']
}

//tuples 
let arr = ['daniel', 25, true];
arr[0] = false

let tup: [string, number, boolean] = ['daniel', 100, true];
