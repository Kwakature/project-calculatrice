const operatorButton = document.querySelectorAll(".operator")
const display = document.querySelector("#display")
const delButton = document.querySelector(".clear")
const equalsButton = document.querySelector(".equals");
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

delButton.addEventListener('click' ,supp)

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

function calcul() {
    let result = 0;
    const n1 = Number(number1);
    const n2 = Number(number2);
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                result = "Impossible";
            }else {
                n1 / n2;
            }
            break;
        default:
            return;
    }
    showDisplay(String(result));
}

equalsButton.addEventListener("click",calcul);