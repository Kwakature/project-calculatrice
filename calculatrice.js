let operatorButton = document.querySelectorAll(".operator")
let display = document.querySelector("#display")
let supprimer = document.querySelector(".clear")
let number1 = "";
let number2 = "";
let operator = "";

function showDisplay(element){
    display.innerHTML = element
}

function supp(){
    number1 = ""
    number2 = ""
    operator = ""
    showDisplay("0")
}

supprimer.addEventListener('click' ,supp)

function operatorSelector (event){
    const op = event.target.dataset.operator;
        if (number1 === "") {
            return;
        }else if (operator !== "") {
            return;
        }else {
            operator = op;
            showDisplay(number1 + operator);
        }
        
    };

for(let opButton of operatorButton){
    opButton.addEventListener('click',operatorSelector);
}
const numberButtons = document.querySelectorAll("[data-number]");

function numberButton(event) {
    const value = event.target.dataset.number;
        if (operator === "") {
            number1 += value;
            showDisplay(number1)
        } else {
            number2 += value;
            showDisplay(number1 + operator + number2);
        }
}
for (buttonNumber of numberButtons) {
    buttonNumber.addEventListener('click', numberButton);
}