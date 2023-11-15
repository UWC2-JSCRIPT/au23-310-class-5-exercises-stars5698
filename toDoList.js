// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

const main = document.querySelector('main'); 
const ul = main.childNodes[1]; 
const liElement = ul.childNodes[0]; 


// If an li element is clicked, toggle the class "done" on the <li>
main.addEventListener('click', (e) => {
  liElement.classList.toggle('done');
})

// If a delete link is clicked, delete the li element / remove from the DOM
const a = document.querySelector('a')
liElement.addEventListener('click', (e) => {
  a.classList.remove('delete');
})

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
};
