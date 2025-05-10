let score = "Kumar"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //output : NaN(not a number)

// "33" -> 33
// "33abc" -> NaN but type of NaN is number
// "true" -> 1; "false" -> 0;

let isLoggedIn = 1
// if we put 1,2,...anything or "Kumar" we'll get TRUE
// if we put 0 or ""(empty string) we'll get FALSE

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
