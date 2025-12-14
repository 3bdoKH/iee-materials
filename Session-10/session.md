.

---

## 1. Why Reusable Code Matters

### What is reusable code?

Reusable code is code that can be written once and used many times. Instead of repeating the same logic again and again, we **encapsulate** it so we can reuse it.

### Why it matters

- Less repetition
- Easier to fix bugs (fix once, works everywhere)
- Easier to read and maintain
- Scales better as applications grow

Example of _non-reusable_ code:

```js
console.log(2 * 2);
console.log(3 * 2);
console.log(4 * 2);
```

Example of _reusable_ thinking:

```js
function double(number) {
  return number * 2;
}
```

---

## 2. Declaring Functions and Parameters

### What is a function?

A function is a **block of code** designed to perform a specific task. You can run (call) it whenever you want.

### Basic function syntax

```js
function greet() {
  console.log("Hello!");
}

greet();
```

### Functions with parameters

Parameters are **inputs** to a function.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Alice");
greet("Bob");
```

- `name` is the parameter
- "Alice" and "Bob" are arguments

### Why parameters are important

They make functions flexible and reusable.

```js
function add(a, b) {
  console.log(a + b);
}

add(5, 3);
add(10, 20);
```

---

## 3. Returning Values from Functions

### What does `return` do?

- Sends a value **back** to where the function was called
- Stops the function execution

```js
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result);
```

### Return vs console.log

- `console.log()` only displays information
- `return` allows you to **use** the result later

```js
function multiply(a, b) {
  return a * b;
}

let total = multiply(4, 5) + multiply(2, 3);
```

---

## 4. Arrays: Creating and Reading Data

### What is an array?

An array is a list that stores multiple values in a single variable.

```js
let fruits = ["apple", "banana", "orange"];
```

### Accessing array items

Arrays use **zero-based indexing**.

```js
fruits[0]; // "apple"
fruits[1]; // "banana"
```

### Array length

```js
fruits.length; // 3
```

---

## 5. Arrays Methods

### Add items

```js
fruits.push("grape"); // add to end
fruits.unshift("mango"); // add to beginning
```

### Remove items

```js
fruits.pop(); // remove last
fruits.shift(); // remove first
```

### Remove or replace using splice

```js
fruits.splice(start, end, replaceble); // remove 1 item at index 1
fruits.slice(start, end); // remove n of items at index n
```

### Search

```js
fruits.indexOf(SearchElement) // returns the first index
fruits.lastIndexOf(SearchElement) // returns the first index
fruits.includes(valueToFind) // returns true if the item found else return false
```

### sort and reverse

```js
fruits.sort(); // sorts the array 
fruits.reverse(); // reverses the array
```

### join

```js
fruits.join("joining string"); // returns a string containing the array elements seperated by the joining string
```
---

## 6. Looping Through Arrays

### Why loops?

Loops allow us to repeat actions for every item in a list.

### `for` loop

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### `forEach` method

```js
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// OR 

fruits.forEach((fruit) => {
  console.log(fruit)
})

```

### Common use cases

- Displaying list items
- Calculating totals
- Updating data

---

## 7. Representing Data with Objects

### What is an object?

An object groups related data using **key-value pairs**.

```js
let user = {
  name: "Alice",
  age: 25,
  isAdmin: true,
};
```

### Accessing object properties

Dot notation:

```js
user.name;
```

Bracket notation:

```js
user["age"];
```

### Objects inside arrays

```js
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
```

```js
users[0].name; // "Alice"
```

---

## 8. Introduction to the DOM

### What is the DOM?

The **Document Object Model (DOM)** is a programming interface for HTML. It represents the structure of a webpage as a tree of objects that JavaScript can read and manipulate.

- Every HTML element becomes a JavaScript object
- JavaScript can change content, styles, and structure
- Changes happen **without reloading the page**

Think of the DOM as a live connection between your JavaScript code and your HTML.

### The DOM tree concept

HTML:

```html
<body>
  <h1>Title</h1>
  <p>Paragraph</p>
</body>
```

DOM structure:

- document

  - body

    - h1
    - p

---

## 9. Selecting DOM Elements

### `document.getElementById()`

Selects **one element** by its ID.

```html
<h1 id="title">Hello</h1>
```

```js
let title = document.getElementById("title");
```

- Fast and simple
- IDs must be unique

### `document.querySelector()`

Selects the **first matching element** using CSS selectors.

```js
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".item");
```

### `document.querySelectorAll()`

Selects **all matching elements**.

```js
let items = document.querySelectorAll(".item");
```

Returns a **NodeList** (array-like, can be looped).

```js
items.forEach(function (item) {
  console.log(item.innerText);
});
```

---

## 10. Changing Text and HTML Content

### `.innerText`

- Changes only visible text
- Ignores HTML tags

```js
title.innerText = "New Title";
```

### `.innerHTML`

- Can insert HTML
- Replaces all existing content

```js
title.innerHTML = "<span>New</span> Title";
```

`.textContent`

- Similar to `innerText` but faster

```js
title.textContent = "Updated Title";
```

---

## 11. Changing Styles with JavaScript

### Inline styles

```js
title.style.color = "red";
title.style.fontSize = "32px";
```

CSS property names use **camelCase** in JavaScript.

### Best practice: Toggle classes

```js
title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("active");
```

This keeps styling in CSS, not JavaScript.

---

## 12. Creating and Removing Elements

### Creating elements

```js
let li = document.createElement("li");
li.innerText = "New Item";
```

### Adding elements to the page

```js
list.appendChild(li);
```

### Removing elements

```js
li.remove();
```

---

## 13. Handling User Interaction (Events)

### What is an event?

An event is an action performed by the user:

- Click
- Input
- Submit
- Mouse movement

### Adding an event listener

```js
let button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

### Accessing event data

```js
button.addEventListener("click", function (event) {
  console.log(event.target);
});
```

---

## 14. DOM + Arrays + Objects (Putting It Together)

### Example: Dynamic list rendering

```js
let tasks = [
  { text: "Study JavaScript", done: false },
  { text: "Practice DOM", done: true },
];

let ul = document.querySelector("ul");

function renderTasks() {
  ul.innerHTML = "";

  tasks.forEach(function (task) {
    let li = document.createElement("li");
    li.innerText = task.text;

    if (task.done) {
      li.classList.add("completed");
    }

    ul.appendChild(li);
  });
}

renderTasks();
```

### Concepts combined

- Arrays to store data
- Objects to structure data
- Functions for reusability
- DOM for UI updates

---

## 15. Common DOM Mistakes

- Selecting elements before the DOM loads
- Using `innerHTML` too often

---

## 16. Final Review and Practice Ideas

### Practice ideas

- Build a todo list
- Create a counter with buttons
- Render a list of users dynamically
- Toggle dark/light mode

---


## Summary

By the end of this lesson, you should understand how to:

- Write reusable functions
- Pass data using parameters and return values
- Store and manipulate lists with arrays
- Represent structured data with objects
- Loop through data
- Interact with HTML using the DOM
