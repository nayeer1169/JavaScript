let score = true
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);   //in this case value is sometime coverted but sometime not.


//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0;

let isLoggedin = 1;
let booleanisLoggedin = Boolean(isLoggedin)
console.log(booleanisLoggedin);