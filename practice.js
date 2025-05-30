// 1.Delayed Execution Using Promise
// Create a reusable function that simulates a delay using a JavaScript Promise.
// Task
// ·       Define a function named wait that takes one parameter ms (milliseconds).
// ·       Inside the function, return a new Promise.
// ·       The promise should resolve after ms milliseconds using setTimeout.
// ·       After creating the wait function, call it with 2000 milliseconds (2 seconds).
// ·       Once the promise resolves, log the message:
// "Waited for 2 seconds".
function wait(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
wait(2000).then(() => {
  console.log("Waited for 2 seconds");
});


// FEFL Practice 2 bookmark_border
// Countdown with Promises
// Use Promises to create a delayed countdown from 3 to 1.
// Task
// ·       Create a function countdown(number) that returns a Promise.
// ·       Use setTimeout to log the current number after 1 second, then resolve.
// ·       Chain .then() calls to create a countdown from 3 to 1.
// ·       After reaching 1, log "Lift off!".
function countdown(number)
{
  return new Promise(resolve=>{
    setTimeout(()=>{
      console.log(number);
      resolve();
    },1000);
  });
}
countdown(3)
  .then(()=>countdown(2))
  .then(()=>countdown(1))
  .then(()=>{
    console.log("Lift off!");
  });


//   Timeout with Cancellation (simulate user cancel)
// Simulate a cancellable timeout using a flag and a Promise.
// Task:
// ·       Create a function delayedMessage(message, ms, shouldCancel) that returns a Promise.
// ·       Inside, use setTimeout to wait ms milliseconds.
// ·       If shouldCancel is true, reject with "Operation cancelled".
// ·       Otherwise, resolve with the message.
// ·       Test the function with both cancelled and non-cancelled scenarios.
function delayedMessage(message, ms, shouldCancel) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldCancel) {
        reject("Operation cancelled");
      } else {
        resolve(message);
      }
    }, ms);
  });
}
// Test 1: Non-cancelled scenario
delayedMessage("Hello after 2 seconds", 2000, false)
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));
// Test 2: Cancelled scenario
delayedMessage("This won't show", 2000, true)
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));


//   Chain Math Operations
// Use chained .then() calls to perform step-by-step math operations.
// Task:
// ·       Start a Promise that resolves with the number 10.
// ·       Chain multiple .then() calls:
// ·       First, multiply by 3
// ·       Then, add 4
// ·       Then, divide by 2
// ·       Log the final result at the end of the chain.
// Start a promise that resolves with the number 10
Promise.resolve(10)
  .then(num => num * 3)        // 10 * 3 = 30
  .then(num => num + 4)        // 30 + 4 = 34
  .then(num => num / 2)        // 34 / 2 = 17
  .then(result => {
    console.log("Final result:", result); // Final result: 17
  });


//   Fetch Multiple Items in Sequence
// Simulate sequential data fetching using Promise chaining.
// Task:
// ·       Create a function fetchItem(itemName, delay) that returns a Promise resolving with "Fetched: <itemName>" after delay milliseconds.
// ·       Use chaining to fetch:
// o  "User" in 1 second
// o  "Posts" in 2 seconds
// o  "Comments" in 1.5 seconds
// ·       Log each item as it is fetched in sequence.
// Function to simulate fetching an item with delay
function fetchItem(itemName, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Fetched: ${itemName}`);
    }, delay);
  });
}
// Sequentially fetch User -> Posts -> Comments
fetchItem("User", 1000)
  .then(result => {
    console.log(result); // Fetched: User
    return fetchItem("Posts", 2000);
  })
  .then(result => {
    console.log(result); // Fetched: Posts
    return fetchItem("Comments", 1500);
  })
  .then(result => {
    console.log(result); // Fetched: Comments
  });


//   Sequential Execution
// Use await to perform asynchronous tasks in a specific order.
// Task:
// ·       Create three functions: stepOne(), stepTwo(), and stepThree() — each returning a Promise that resolves with a message like "Step 1 done" after 1 second.
// ·       In an async function runSteps(), call them in order using await, and log their results.
// Step functions that return a Promise resolved after 1 second
function stepOne() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}
function stepTwo() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}
function stepThree() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}
async function runSteps() {
  const result1 = await stepOne();
  console.log(result1);
  const result2 = await stepTwo();
  console.log(result2);
  const result3 = await stepThree();
  console.log(result3);
}
runSteps();


// Async Validation
// Validate input using an async function.
// Task:
// ·       Write a function isUsernameAvailable(name) that returns a Promise resolving true if the name is not "admin", otherwise rejecting "Name taken".
// ·       Create an async function checkAvailability() that takes a name and uses await to validate it.
// ·       Log "Available" or "Error: Name taken" using try...catch.
// Function to validate username availability
function isUsernameAvailable(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.toLowerCase() === "admin") {
        reject("Name taken");
      } else {
        resolve(true);
      }
    }, 500);
  });
}
async function checkAvailability(name) {
  try {
    await isUsernameAvailable(name);
    console.log("Available");
  } catch (error) {
    console.log("Error:", error);
  }
}
checkAvailability("admin");     // Output: Error: Name taken
checkAvailability("milan");     // Output: Available


// Time Logger
// Log timestamps between delayed actions using await.
// Task:
// ·       Write an async function that logs the current time, waits 2 seconds, and logs time again.
// ·       Use new Date().toLocaleTimeString() to log time before and after await wait(2000).
// Reusable wait function
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function logTime() {
  console.log("Start time:", new Date().toLocaleTimeString());
  await wait(2000); // Wait for 2 seconds
  console.log("End time:", new Date().toLocaleTimeString());
}
logTime();


// Toggle Message Visibility
// Show or hide a message based on a button click.
// Task:
// ·       Create a component ToggleMessage.
// ·       Use useState to store a boolean isVisible (initially false).
// ·       Add a button labeled “Show/Hide Message”.
// ·       When clicked, toggle isVisible.
// ·       If isVisible is true, display <p>Hello, this is a message!</p>.
import React, { useState } from 'react';
function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };
  return (
    <div>
      <button onClick={handleToggle}>Show/Hide Message</button>
      {isVisible && <p>Hello, this is a message!</p>}
    </div>
  );
}
export default ToggleMessage;


// Controlled Input Field
// Make a controlled input that displays what the user types.
// Task:
// ·       Create a component TextInputDisplay.
// ·       Use useState to manage an input value (text).
// ·       Render an <input> field bound to the state.
// ·       Display what the user typed in a <p> below the input:
// "You typed: <text>".
import React, { useState } from 'react';
function TextInputDisplay() {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {text}</p>
    </div>
  );
}
export default TextInputDisplay;


// Click Tracker
// Track how many times a button has been clicked.
// Task:
// ·       Create a component ClickTracker.
// ·       Use useState to store a clickCount (initially 0).
// ·       Render a button labeled “Click me!”.
// ·       On click, increment the count and display "You clicked X times".
import React, { useState } from 'react';
function ClickTracker() {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>You clicked {clickCount} {clickCount === 1 ? 'time' : 'times'}</p>
    </div>
  );
}
export default ClickTracker;


// Simple Form Submission
// Capture and display input from a form on submission.
// Task:
// ·       Create a component SimpleForm.
// ·       Use useState to track name input.
// ·       Render an <input> field and a submit <button>.
// ·       On form submission:
// o  Prevent page reload.
// o  Display "Submitted: <name>" below the form.
// ·       Clear the input after submission.
import React, { useState } from 'react';
function SimpleForm() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedName(name);
    setName(''); // Clear input after submission
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedName && <p>Submitted: {submittedName}</p>}
    </div>
  );
}
export default SimpleForm;


// Character Counter
// Track how many characters the user types into an input field.
// Task:
// ·       Create a component CharacterCounter.
// ·       Use useState to track inputText.
// ·       Render a controlled <textarea> with the inputText value.
// ·       Below it, display: "Character count: X" based on inputText.length.
import React, { useState } from 'react';
function CharacterCounter() {
  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Type something here..."
        rows={5}
        cols={40}
      />
      <p>Character count: {inputText.length}</p>
    </div>
  );
}
export default CharacterCounter;


// Fetch and Display User Data
// Fetch user data from an API on component mount and display it.
// Task:
// ·       Create a component UserProfile.
// ·       Use useEffect to fetch data from:
// https://jsonplaceholder.typicode.com/users/1
// ·       Use useState to store the user's name and email.
// ·       Display:
// "Name: <name>" and "Email: <email>".
import React, { useEffect, useState } from 'react';
function UserProfile() {
  const [user, setUser] = useState({ name: '', email: '' });
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser({ name: data.name, email: data.email });
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  }, []);
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name || 'Loading...'}</p>
      <p><strong>Email:</strong> {user.email || 'Loading...'}</p>
    </div>
  );
}
export default UserProfile;


// Save Input to LocalStorage
//              Persist an input field value in localStorage.
// Task:
// ·       Create a component PersistentInput.
// ·       Use useState to track text.
// ·       On every text change, save it to localStorage under key "savedText" using useEffect.
// ·       On mount, read from localStorage and pre-fill the input.
import React, { useState, useEffect } from 'react';
function PersistentInput() {
  const [text, setText] = useState('');
  // Load saved text from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('savedText');
    if (saved) {
      setText(saved);
    }
  }, []);
  // Save to localStorage on every text change
  useEffect(() => {
    localStorage.setItem('savedText', text);
  }, [text]);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Saved Text: {text}</p>
    </div>
  );
}
export default PersistentInput;


//  Fetch Posts on Button Click (with loading)
// Fetch posts only when the user triggers it manually.
// Task:
// ·        Create a component PostsFetcher.
// ·         Add a button: "Load Posts".
// ·         On button click, set a shouldFetch state to true.
// ·         In useEffect, watch shouldFetch. If true, fetch from:
// https://jsonplaceholder.typicode.com/posts?_limit=5
// ·         Display post titles in a list and show "Loading..." while fetching.
import React, { useState, useEffect } from 'react';
function PostsFetcher() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!shouldFetch) return;
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
        setShouldFetch(false); // prevent refetch on re-render
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
        setShouldFetch(false);
      });
  }, [shouldFetch]);
  return (
    <div>
      <button onClick={() => setShouldFetch(true)}>Load Posts</button>
      {loading && <p>Loading...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default PostsFetcher;


// Save Theme Preference
// Allow users to toggle light/dark mode and remember their choice.
// Task:
// ·       Create a component ThemeToggler.
// ·       Use useState to manage a theme ("light" or "dark").
// ·       On mount, read the theme from localStorage.
// ·       On theme change, save it to localStorage using useEffect.
// ·       Add a button to toggle theme. Display the current theme in the UI.
import React, { useState, useEffect } from 'react';
function ThemeToggler() {
  const [theme, setTheme] = useState('light');
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  const themeStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: '1rem',
    textAlign: 'center',
    minHeight: '100vh'
  };
  return (
    <div style={themeStyles}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
export default ThemeToggler;


//  Typed Function for Area Calculation
// Write a TypeScript function that calculates the area of a rectangle using typed parameters.
// Task:
// ·       Define a function calculateArea(width: number, height: number): number.
// ·       The function should return the area (width * height).
// ·       Try calling the function with both valid and invalid types to see how TypeScript prevents errors.
function calculateArea(width: number, height: number): number {
  return width * height;
}
const area = calculateArea(5, 10);
console.log(`Area: ${area}`); // Output: Area: 50


// Interface for a User Profile
// Define an interface for a user object and use it in a function.
// Task:
// ·       Define an interface User with:
// 1.       id: number
// 2.       name: string
// 3.       isActive: boolean
// ·       Write a function printUser(user: User): void that logs the user’s info.
// ·       Create a sample object and pass it to the function.
// Step 1: Define the interface
interface User {
  id: number;
  name: string;
  isActive: boolean;
}
// Step 2: Define a function that uses the User interface
function printUser(user: User): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Active: ${user.isActive ? 'Yes' : 'No'}`);
}
// Step 3: Create a sample user object
const sampleUser: User = {
  id: 1,
  name: "Alice",
  isActive: true,
};
// Step 4: Call the function
printUser(sampleUser);


// Type Narrowing with Union Types
// Use union types and type guards to handle multiple input types.
// Task:
// ·       Write a function printValue(value: string | number): void.
// ·       If it’s a string, log it in uppercase.
// ·       If it’s a number, log it multiplied by 2.
// ·       Use typeof to implement type narrowing.
function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // Convert string to uppercase
  } else if (typeof value === 'number') {
    console.log(value * 2); // Multiply number by 2
  }
}
// Sample calls
printValue("hello"); // Output: HELLO
printValue(21);      // Output: 42


// Typed Array and Object Iteration
// Work with typed arrays and forEach.
// Task:
// ·       Define a type Product with id: number, name: string, and price: number.
// ·       Create an array of Product[].
// ·       Write a function logProducts(products: Product[]): void that logs each product’s name and price.
// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
};
// Create an array of products
const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
];
// Function to log product name and price
function logProducts(products: Product[]): void {
  products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
  });
}
// Call the function
logProducts(products);


// Change Text Content
// Change the text content of an HTML element using TypeScript.
// Task:
// ·       Create an HTML element with an id="greeting".
// ·       In TypeScript, write a function updateGreeting(text: string) that:
// 1.       Selects the element with id="greeting".
// 2.       Updates its text content to the provided text parameter.
// ·       Call the function with a custom greeting string.
<div id="greeting">Hello!</div>//html file//
//ts file//
function updateGreeting(text: string): void {
  const element = document.getElementById("greeting");
  if (element) {
    element.textContent = text;
  } else {
    console.error("Element with id 'greeting' not found.");
  }
}
// Call the function with a custom greeting
updateGreeting("Welcome to TypeScript!");


// Toggle Class on Button Click
// Add or remove a class from an element based on a button click.
// Task:
// ·       Create an HTML button and a div with an id="box".
// ·       In TypeScript, write a function toggleClass() that:
// 1.       Selects the div with id="box".
// 2.       Toggles the class "active" on the element when the button is clicked.
// ·       Add a CSS rule for the "active" class (e.g., change background color).
<button id="toggleBtn">Toggle Active</button>
<div id="box">Box</div>
//html//
#box {
  width: 150px;
  height: 150px;
  background-color: lightgray;
  line-height: 150px;
  text-align: center;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}
#box.active {
  background-color: coral;
  color: white;
  font-weight: bold;
}
//css//
function toggleClass(): void {
  const box = document.getElementById("box");
  if (box) {
    box.classList.toggle("active");
  } else {
    console.error("Element with id 'box' not found.");
  }
}
const button = document.getElementById("toggleBtn");
if (button) {
  button.addEventListener("click", toggleClass);
} else {
  console.error("Button with id 'toggleBtn' not found.");
}
//ts//


//  Handle Form Submission
// Capture and log form input values when a user submits a form.
// Task:
// ·       Create an HTML form with input fields for name and email and a submit button.
// ·       In TypeScript, write a function handleFormSubmit(event: Event) that:
// 1.       Prevents the default form submission behavior.
// 2.       Logs the values of name and email to the console when the form is submitted.
// ·       Add an event listener to the form to call handleFormSubmit when it is submitted.
<form id="userForm">
  <label>
    Name:
    <input type="text" name="name" id="nameInput" required />
  </label>
  <br />
  <label>
    Email:
    <input type="email" name="email" id="emailInput" required />
  </label>
  <br />
  <button type="submit">Submit</button>
</form>
//html//
function handleFormSubmit(event: Event): void {
  event.preventDefault(); // Prevent page reload
  const form = event.target as HTMLFormElement;
  const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
  const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
  if (nameInput && emailInput) {
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
  } else {
    console.error("Input elements not found.");
  }
}
const form = document.getElementById("userForm") as HTMLFormElement | null;
if (form) {
  form.addEventListener("submit", handleFormSubmit);
} else {
  console.error("Form element not found.");
}
//ts//


// Create a Modal
// Create and display a modal window using TypeScript.
// Task:
// ·       Create a modal <div> with some content and a close button inside the HTML.
// ·       In TypeScript:
// 1.       Write a function openModal() that sets the modal's display style to block.
// 2.       Write a function closeModal() that sets the modal's display style to none.
// ·       Add event listeners to open the modal when a button is clicked and close it when the close button inside the modal is clicked.
<button id="openModalBtn">Open Modal</button>

<div id="myModal" style="display:none; position: fixed; top:0; left:0; width:100%; height:100%; background-color: rgba(0,0,0,0.5);">
  <div style="background: white; padding: 20px; margin: 100px auto; width: 300px; position: relative; border-radius: 8px;">
    <span id="closeModalBtn" style="position: absolute; top: 10px; right: 15px; cursor: pointer; font-weight: bold;">&times;</span>
    <h2>Modal Title</h2>
    <p>This is the modal content.</p>
  </div>
</div>
//html//
function openModal(): void {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "block";
  }
}
function closeModal(): void {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
  }
}
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");
if (openBtn) {
  openBtn.addEventListener("click", openModal);
}
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}
//ts//
