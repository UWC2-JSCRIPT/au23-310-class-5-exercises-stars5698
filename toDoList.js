// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

const ul = document.querySelector('.today-list');
const addButton = document.querySelector('.add-item');

// If an li element is clicked, toggle the class "done" on the <li>
// If a delete link was clicked, then remove <li> from the DOM 
// <ul> has addEventListener instead of <li> or the delete link because <li> and the delete link are dynamic, <li> needs to be accessed indirectly due to this
ul.addEventListener('click', function(e) {
  
  const theElement = e.target; 
  let theElementName = theElement.tagName; 
  
  // tagName is always returned in uppercase lettering
  if(theElementName === 'LI')
  {
    theElement.classList.toggle('done');
  }

  
  let theClassName = theElement.className;
  
  if(theClassName === 'delete')
  {
    // <li> is parent element of delete link
    const liElement = theElement.parentElement; 
    liElement.remove();
  }

}); 


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)


const addListItem = function(e) {
  e.preventDefault();
  e.target = addButton;
  const inputElement = this.parentNode.getElementsByTagName('input')[0];
  const text = inputElement.value; // use this text to create a new <li>
  
  // Finish function here
  // Create <li> element (which consists of a <span> and an <a>)
  const myliElement = document.createElement('li');

  // Create <span> element
  const myspanElement = document.createElement('span');

  // Create <a> link for Delete button
  const myDeleteLink = document.createElement('a');

  // Nest <span> and <a> within <li> element
  myliElement.appendChild(myspanElement);
  myliElement.appendChild(myDeleteLink);

  // Set user's input within <span>
  myspanElement.innerHTML = text; 

  // To match HTML/CSS for a to-do item
  myDeleteLink.setAttribute('class', 'delete'); 
  myDeleteLink.innerHTML = 'Delete';
 

  // Add new-to item to list of to-do item(s)
  ul.appendChild(myliElement);
};

// Add new to-do item to list upon click of Add button
addButton.addEventListener('click', addListItem);

