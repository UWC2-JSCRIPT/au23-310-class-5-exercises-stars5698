// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
const aElement = document.createElement('a');
aElement.innerText = "Buy Now!";
aElement.setAttribute('id', 'cta');

const pElementsList = document.getElementsByTagName('p'); // Get all <p> elements 
lastPElementIndex = pElementsList.length - 1;  // Find index of last <p> element 

// Get the last <p> 
const lastPElement = document.getElementsByTagName('p')[lastPElementIndex]; 

// Insert new <a> element/node after last <p>
lastPElement.after(aElement);

// Access (read) the data-color attribute of the <img>,
// log to the console
const carImg = document.getElementsByTagName('img')[0];
const dataColorAtt_Img = carImg.dataset.color; 
console.log(`Data-color attribute of <img> is: ${dataColorAtt_Img}`);

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const liElementsList = document.getElementsByTagName('li');
const thirdliElement = liElementsList[2]; // Access third <li> item 
thirdliElement.setAttribute('class', 'highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
let mainElement = document.getElementsByTagName('main')[0];
mainElement.removeChild(lastPElement);