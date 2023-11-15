// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage
let moreInfoLink = document.getElementById('more-info');

moreInfoLink.addEventListener('click', (e) => {
  alert('Here\'s some info');
})

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"
let dogButton = document.getElementById('dog');

dogButton.addEventListener('click', (e) => {
  alert('Bow wow!');
})