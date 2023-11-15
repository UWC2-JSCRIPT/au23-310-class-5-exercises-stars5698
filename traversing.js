// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');

const bodyChildren = body.children; // For testing purposes
console.log(bodyChildren); // Prints [main, script]

const main = body.firstElementChild;
console.log(main); // Prints main
console.log('\n');

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');

const ulParent = ul.parentNode.nodeName; // .nodeName is needed in order to display parent node
console.log(`Parent node of <ul>: ${ulParent}`); // For testing purposes, prints MAIN


const bodyElement = ul.parentNode.parentNode.nodeName;
console.log(`Grandparent node of <ul>: ${bodyElement}`); // Prints BODY
console.log('\n');

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');

const pPreviousSibling = p.previousElementSibling.nodeName; // For testing purposes
console.log(`Previous sibling of <p>: ${pPreviousSibling}`); // Prints UL

const pPreviousSiblingChildrenCount = p.previousElementSibling.childElementCount; // Confirm # children
console.log(`Ul Children Count: ${pPreviousSiblingChildrenCount}`); // <ul> has 3 children

const thirdliElement = p.previousElementSibling.children[2].nodeName; // For testing purposes
console.log(`Third li element: ${thirdliElement}`); // Prints LI

const thirdliElementContents = p.previousElementSibling.children[2].innerHTML;
console.log(`Third li element's contents: ${thirdliElementContents}`); // Prints contents of third list item (i.e. list item 3)