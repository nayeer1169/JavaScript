// Primitive data type (call by value) - its of 7 categories
//7 types : String , number , boolean , null , undefined, symbol, BIgInt

//Javascript  does not need to define language
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid)

//big Int
 const bigNumber = 628429492946942n

//Non primitive data type (call by reference) 
// array , Objects , Functions

const heros = ["Shaktiman","naagraj","doga"]
let myObj = {
    name:"nayeer",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}
1
console.log(typeof myFunction);