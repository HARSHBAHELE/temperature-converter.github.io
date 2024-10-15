let celsius = document.querySelector("celsius");
let fahrenheit = document.querySelector("fahrenheit");
let kelvin = document.querySelector("kelvin");

let computeTemp = (event) => {
    let cureentVal = event.target.value;
    
    switch(event.target.name) {
        case "celsius":
            kelvin.value = (cureentVal + 273.15).toFixed(2);
            fahrenheit.value = (1.8 * cureentVal + 32).toFixed(2);
        break;

        case "fahrenheit":
            celsius.value = ((cureentVal - 32 )/ 1.8).toFixed(2);
            kelvin.value = ((cureentVal - 32)/1.8)
         }
    }
