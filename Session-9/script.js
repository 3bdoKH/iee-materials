let x = false;
let y = '';
// == compares value not type
// console.log(x == y) // true 

// === compares value and type
// console.log(x === y)// false

// console.log(x !== y)// true

let n1 = 10;
let n2 = 20;

console.log(n1 <= n2); // true
console.log(n1 >= n2); // false

// and && 
// or ||
// not !

let age = 20;
let isStudent = false;

if (age >= 18 && isStudent) {
    console.log("you may enter");
} else if (age < 18 || !isStudent) {
    console.log("you are not allowed");
} else {
    console.log("please identify yourself")
}

let number = 11;
number < 10 ? ++number : --number

console.log(number)


// loops =>  for (start; end ;step) , while (condition) { code }
let factorial = 10;
let result = 0;
// for (let i = 1; i <= factorial; i++) {
//     result = result + i;
// }
// console.log(result)

while (factorial > 0) {
    result += factorial;
    factorial--
}
console.log(`the result is : ${result}`)

document.write(`
    <h1>the result is : ${result}</h1>
`)
