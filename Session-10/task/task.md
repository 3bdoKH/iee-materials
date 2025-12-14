# DOM Training – To-Do List Project

This assignment will help you practice **functions, arrays, objects, loops, and DOM manipulation** by building a fully interactive **To-Do List** application using **vanilla JavaScript**.

You are expected to build the project **step by step**, not copy-paste the final solution.

---

## Project Goal

Create a web page where users can:

- Add tasks
- Mark tasks as completed
- Delete tasks
- See tasks update dynamically without refreshing the page

This project connects **JavaScript data (arrays & objects)** with the **HTML interface (DOM)**.

---

## Project Structure

Your project should include:

- `index.html`
- `style.css`
- `script.js`

You will mainly work inside the **JavaScript file**.

---

## Step 1: HTML Structure

Create the basic HTML structure:

- A container div
- A title (`<h2>`)
- An input field for typing tasks
- A button to add tasks
- An empty `<ul>` where tasks will appear

Example elements you need:

```html
<input type="text" id="task-input" />
<button id="add-btn">Add</button>
<ul id="task-list"></ul>
```

**Goal:** Prepare elements that JavaScript can interact with.

---

## Step 2: Selecting DOM Elements

In JavaScript, select the elements you need:

```js
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
```

---

## Step 3: Create the Data Structure

Create an **array** that will store all tasks:

```js
let tasks = [];
```

Each task should be an **object** with:

- `id` → unique identifier
- `text` → task description
- `isCompleted` → boolean

Example task object:

```js
{
  id: 123456,
  text: "Learn JavaScript",
  isCompleted: false
}
```

---

## Step 4: Add a Task (Function)

Create a function that:

1. Reads the input value
2. Validates that it is not empty
3. Creates a new task object
4. Adds it to the `tasks` array
5. Clears the input
6. Calls a render function

Hints:

- Use `Date.now()` to create a unique ID

  **Goal:** Practice functions, objects, and array `.push()`.

---

## Step 5: Render Tasks to the DOM

Create a function called `renderTasks()`.

This function should:

1. Clear the `<ul>` content
2. Check if the array is empty
3. Loop through the `tasks` array
4. Create a `<li>` for each task
5. Insert task text and buttons
6. Append elements to the DOM

Hints:

- Use `document.createElement()`
- Use `.innerHTML` for structure
- Use `.appendChild()`

  **Goal:** Connect JavaScript data to the HTML view.

---

## Step 6: Mark Tasks as Completed

Create a function that:

- Receives a task `id`
- Finds the task in the array
- Toggles `isCompleted` between `true` and `false`
- Re-renders the list

Hints:

- Use `.find()` on the array
- Use `.classList.add()` to apply styles

---

## Step 7: Delete Tasks

Create a function that:

- Receives a task `id`
- Removes the task from the array
- Re-renders the list

Hint:

- Use `.filter()` to create a new array

  **Goal:** Practice removing items from arrays.

---

## Step 8: Button Events

Attach events so that:

- Clicking **Add** adds a task
- Clicking **Done** toggles completion
- Clicking **Delete** removes the task

Hints:

- Use `addEventListener()`
- Or `onclick` for simple handlers

---

## Step 9: Empty List Message

If there are no tasks:

- Show a message like: "No tasks yet"
- Hide it automatically when tasks are added

---

## Key Concepts Practiced

✅ Functions and parameters
✅ Returning values
✅ Arrays (`push`, `filter`, `find`, loops)
✅ Objects and properties
✅ DOM selection
✅ DOM manipulation
✅ Events
✅ Dynamic UI updates

---

## Bonus Challenges (Optional)

- Add an **Edit task** feature
- Save tasks to **localStorage**
- Add keyboard support (Enter key)
- Add task counters (Completed / Total)

---

## Submission Checklist

Before submitting, make sure:

- Code is readable and commented
- No duplicate tasks appear
- UI updates correctly
- No page refresh is required
