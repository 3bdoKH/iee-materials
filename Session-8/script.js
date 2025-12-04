/*
multiple
line
comment
*/

// slingle line comment

console.log("hello world"); // appears in console

// window.alert("hi") => popup 

document.write("<h1>session 9 (javascript)</h1>"); // appears in the document

// variables identifiers (var, let , const)
/*
    var : reassign - redeclaration - function-scoped
    let : no reassign - redeclaration - block-scoped
    const : no reassign - no redeclaration - block-scoped
*/

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("from if using let" + " " + b)
    console.log("from if using const" + " " + c)
}



function sayHello() {
    var hello = "hello";
    let anything = 10;
}
// console.log(hello) => error : function-scoped
// console.log(anything) => error : block-scoped

var name = "ahmed";
var age;
age = 20;
var age = 30;
console.log(age) // 30

let x = 10;
let y;
y = 20;
y = "ali";
console.log(y) // ali

const isStudent = true;
// isStudent = false;  => error
console.log(isStudent)


console.log("outside if using var" + " " + a)
// console.log(b) => error (block-scoped)
// console.log(c) => error (block-scoped)


// data types : string, number, boolean
let int = 10.5;
int = 10;
console.log("this is string"); // string
console.log(int); // intger
let anything = true; // boolean (true or false)

console.log(int * 15)
console.log(int / 10)
console.log(int + 10)
console.log(int - 10)
console.log(int ** 2)

console.log("-------------------------------------------------")
console.log(++int) //  int + 1
console.log(int++) // int => 11 next line = 12
console.log(int)  // 12

console.log("-------------------------------------------------")
console.log(--int); // int - 1
console.log(int--); // int => 11 next line = 10
console.log(int) // 10
console.log("-------------------------------------------------")


let mod = 48;
// console.log(mod % 2)
mod % 2 === 0 ? console.log("number is even") : console.log("number is odd")