let operatorButton = document.querySelectorAll(".operator")
let display = document.querySelector("#display")
let list = '';

function showDisplay(element){
    list += element
    display.innerHTML = list
}


function operatorSelector (event){
    const buttonOpe = event.target;
    const operation = buttonOpe.dataset.operator;
    showDisplay(operation)
    console.log(operation)
}

for(let ope of operatorButton){
    ope.addEventListener('click',operatorSelector);
}
const numberButtons = document.querySelectorAll("[data-number]");

function numberButton(event) {
    const clikedButton = event.target;
    const nb = clikedButton.dataset.number;
    showDisplay(nb)
    console.log(nb)
    
}
for (buttonNumber of numberButtons) {
    buttonNumber.addEventListener('click', numberButton);
}

