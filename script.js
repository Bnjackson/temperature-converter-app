/*Temperature-converter 
*Enter value into one of the inputs will display the conversion in the two empty inputs.
*/

const fahrenheit = document.getElementById('fahrenheit-input');
const celsius = document.getElementById('celsius-input');
const kelvin= document.getElementById('kelvin-input');

const inputs = document.querySelectorAll('.inputs');
for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', convertTemperature);
};


function convertTemperature (e) {
    let value = e.target.value;
    let celsiusUnrounded, kelvinUnrounded, fahrenheitUnrounded;
    console.log(value);    
    if (e.currentTarget.classList.contains('fahrenheit')) {
        celsiusUnrounded = (value - 32) / 1.8;
        celsius.value = Math.round(celsiusUnrounded * 100) / 100;
        kelvinUnrounded = ((value - 32) / 1.8) + 273.15;
        kelvin.value = Math.round(kelvinUnrounded * 100) / 100;
    }
    else if (e.currentTarget.classList.contains('celsius')) {
        fahrenheitUnrounded = (value * 1.8) + 32;
        fahrenheit.value = Math.round(fahrenheitUnrounded * 100) / 100;
        kelvinUnrounded = Number(value) + 273.15;
        kelvin.value = Math.round(kelvinUnrounded * 100) / 100;
    }
    else if (e.currentTarget.classList.contains('kelvin')) {
        fahrenheitUnrounded = ((value - 273.15) * 1.8) + 32;
        fahrenheit.value = Math.round(fahrenheitUnrounded * 100) / 100;
        celsiusUnrounded = Number(value) - 273.15;
        celsius.value = Math.round(celsiusUnrounded * 100) / 100;
    }

}

