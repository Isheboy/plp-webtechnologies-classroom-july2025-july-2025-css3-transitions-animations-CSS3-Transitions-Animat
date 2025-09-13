// script.js
// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// Part 3: Combining CSS Animations with JavaScript

// --- Part 2: Functions Demo ---

// Global variable for scope demo
let globalVar = "I am global!";

// Function with local scope and parameter/return value
function sum(a, b) {
  // Local variable
  let result = a + b;
  return result;
}

// Function to demonstrate scope
function showScopeDemo() {
  let localVar = "I am local!";
  document.getElementById(
    "scope-demo-result"
  ).textContent = `Global: ${globalVar} | Local: ${localVar}`;
}

// Function to show sum result
function showSumResult() {
  const result = sum(5, 7);
  document.getElementById("sum-result").textContent = `sum(5, 7) = ${result}`;
}

// --- Part 3: JS triggers CSS Animation ---

document
  .getElementById("animate-trigger")
  .addEventListener("click", function () {
    const box = document.getElementById("js-animated-box");
    box.classList.remove("animated"); // reset if already animated
    void box.offsetWidth; // force reflow
    box.classList.add("animated");
  });

// Modal logic
const modal = document.getElementById("modal");
const showModalBtn = document.getElementById("show-modal");
const closeModalBtn = document.getElementById("close-modal");

showModalBtn.addEventListener("click", function () {
  modal.classList.add("show");
});
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("show");
});
// Optional: close modal when clicking outside content
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
