// Part 1: Variable declarations and conditionals
let name = "Ryan";
let age = 25;

if (age >= 18) {
  console.log(`${name} is an adult.`);
} else {
  console.log(`${name} is a minor.`);
}

// Part 2: Custom functions
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function add(a, b) {
  return a + b;
}

greet("Alice");
console.log(add(2, 3));

// Part 3: Loop examples
// Example 1: for loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// Example 2: while loop
let j = 0;
while (j < 3) {
  console.log(`While loop iteration ${j}`);
  j++;
}

// Part 4: DOM interactions
// Example 1: Get an element by ID
let header = document.getElementById("header");
console.log(header.textContent);

// Example 2: Add an event listener to a button
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("Button clicked!");
  let output = document.getElementById("output");
  output.textContent = "Button clicked!";
});

// Example 3: Create a new element and append it to the page
let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph.";
document.body.appendChild(newElement);
