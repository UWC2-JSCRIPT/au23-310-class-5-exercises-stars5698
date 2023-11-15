// Donna Quach, JavaScript 310B, Autumn 2023
// Class 5 Exercises 

// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const seattleWeatherText = document.getElementById('weather-head');
seattleWeatherText.innerText = 'February 10 Weather Forecast, Seattle';

// Change the styling of every element with class "sun" to set the color to "orange"
const sunClassElements = document.getElementsByClassName('sun'); 
for(i = 0; i < sunClassElements.length; i++)
{
    sunClassElements[i].style.color = 'orange';
}

// Change the class of the second <li> from to "sun" to "cloudy"
sunClassElements[1].className = 'cloudy'; 