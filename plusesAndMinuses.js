// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 


let countClicks = 0; 

// When a user clicks the + element, the count should increase by 1 on screen.
const plusElement = document.getElementById('plus');

plusElement.addEventListener('click', (e) => {
    countClicks++; 
    document.getElementById('counter').innerHTML = countClicks; 
    console.log(`Current count: ${countClicks}`); 
})

// When a user clicks the – element, the count should decrease by 1 on screen.
const minusElement = document.getElementById('minus');

minusElement.addEventListener('click', (e) => {
    countClicks--;
    document.getElementById('counter').innerHTML = countClicks; 
    console.log(`Current count: ${countClicks}`);
})