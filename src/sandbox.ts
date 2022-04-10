const character = 'Daniel';

console.log(character);

const inputs = document.querySelectorAll('input')

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

//function
let greet: Function;

greet = () => {
    console.log('Hello, Again');
}

const add = (a: number, b:number, c: number|string =10):void => {
    console.log(a + b);
    console.log(c);
}

add(6, 2, 8);


type StringOrNum = string |  number;
type objWithName = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greetA = (user: {name: string, uid: StringOrNum}) => {
    console.log(`${user.name} says hello`);
}