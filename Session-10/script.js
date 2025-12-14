// functions ====================
function sayHello() {
    console.log("hello world");
}
sayHello();

function factorial(num) {
    let result = 1;
    for (i = 1; i <= num; i++) {
        result *= i;
    }
    // console.log(result)
    return result;

    // console.log("anythig") => unreachable code
}
console.log("the factorial is : " + "  " + factorial(10))

// arrays ==================================

let fruits = ["apple", "orange", "banana"]; // array of strings
let nums = [3, 2, 6, 4, 9, 8, 1, 2]; // array of numbers
let bools = [true, false, true, true] // array of booleans
let mixedArray = [true, 10, 6.5, "ahmed", ["ali", 10, true], { name: "sara" }]
// console.log(fruits[0]) //apple
// console.log(fruits[1]) //orange
// console.log(fruits[2]) //banana
// console.log(nums.length)
// console.log(mixedArray)

fruits.push("pinapple", "avocado") // add element to the end
// console.log(fruits)

// fruits.unshift("avocado") // add element to the start
// console.log(fruits)

// let lastItem = fruits.pop()// removes the last element

// console.log(fruits)
// console.log(`the last item is : ${lastItem}`)

// let firstElement = fruits.shift()//  removes the first element
// console.log(firstElement)

console.log(fruits.slice(0, 2)) // (start, end ) but not including the end 
console.log(fruits)

fruits.splice(0, 2, "ali", "ahmed") // (start, end) + changes the original array
console.log(fruits)
fruits.push("ahmed")

console.log(fruits.indexOf("ahmed"))
console.log(fruits.lastIndexOf("ahmed"))
console.log(fruits.includes("sara")) // false
console.log(fruits.includes("ahmed")) // true


nums.sort()
console.log(nums)
nums.reverse()
console.log(nums)


//console.log(fruits.join()) // "ali,ahmed,banana,pinapple,avocado,ahmed"
//console.log(fruits.join(" | ")) // "ali | ahmed | banana | pinapple | avocado | ahmed"
// for (i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// fruits.forEach((fruit) => {
//     console.log(fruit)
// })


let users = [
    {
        id: 1,
        name: "ahmed",
        age: 20,
        isStudent: true
    },
    {
        id: 2,
        name: "ali",
        age: 20,
        isStudent: true
    }
]

console.log(users[0].name)

// let container = document.getElementById("div")
// console.log(document.getElementsByClassName("container"))
// console.log(document.querySelector("div")) => selects the first matched element
// console.log(document.querySelectorAll("div")) => returns an array of the matched elements

// let heading = document.querySelector("h1");
// // heading.innerText = "Session 11"
// heading.textContent = "Session 11"
// // container.style.backgroundColor = "red"
// container.classList.add("element")
// // container.classList.remove("container")
// container.classList.toggle("container")
// let paragraph = document.createElement("p");
// paragraph.textContent = " ipsum dolor sit, amet consectetur adipisicing elit. Expedita, laborum perferendis autem voluptates voluptatem nam sequi. "
// container.appendChild(paragraph)
// paragraph.remove()

// let button = document.querySelector("button")
// button.addEventListener("click", () => {
//     heading.textContent = "button clicked"
// })
// let input = document.querySelector("input")
// input.addEventListener("input", (e) => {
//     heading.textContent = e.target.value
// })


const products = [
    {
        id: 1,
        name: "apple",
        price: 100,
        description: "this is a description for the apples"
    },
    {
        id: 2,
        name: "orange",
        price: 200,
        description: "this is a description for the oranges"
    },
    {
        id: 3,
        name: "banana",
        price: 300,
        description: "this is a description for the bananas"
    }
]

let container = document.querySelector(".container");
products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card")
    card.innerHTML = `
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <span>${product.price}</span>
        <button onclick="addToCart(${product.id})">Add To Cart</button>
    `
    container.appendChild(card)
})

function addToCart(id) {
    console.log("added product" + " " + id + " " + "to cart")
}