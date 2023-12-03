// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
const tableElement = document.getElementById('myTable');




function getCoordinates(e) {
    let mouseCoordinateX = e.clientX;
    let mouseCoordinateY = e.clientY; 
    let coordinates = `${mouseCoordinateX}, ${mouseCoordinateY}`;
    
    e.target.innerHTML = coordinates; 
}

tableElement.addEventListener('click', getCoordinates);

