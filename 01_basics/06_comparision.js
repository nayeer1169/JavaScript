// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2=1);
// console.log(2!=1);

console.log("2">1);
console.log("02">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0 );

//The reason is that an equality check == and comparision > < >= <= works differently.
//Compariosn convert convert null to a number treal=ting it as o.
//that's why (3) null >= 0 is true and null >= 0 is false.


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === this means strict check
console.log("2"===2);
console.log("2"==2);