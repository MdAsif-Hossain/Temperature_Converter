


const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9/5+32;
        //° = win + alt +0176
        result.textContent = temp.toFixed(1)+"°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp-32)*(5/9);
        //° = win + alt +0176
        result.textContent = temp.toFixed(1)+"°F";

    }
    else{
        result.textContent = "Select a unit";
    }

}