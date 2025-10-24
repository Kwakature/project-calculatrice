let operatorButton = document.querySelectorAll(".operator")

function operatorSelector (event){
    const buttonOpe = event.target;
    const operation = buttonOpe.dataset.operator;

    console.log(operation)
}

for(let ope of operatorButton){
    ope.addEventListener('click',operatorSelector);
}
const numberButtons = document.querySelectorAll("[data-number]");
const display = document.getElementById("display");

function numberButton(event) {
    const clikedButton = event.target;
    const nb = clikedButton.dataset.number;
    console.log(nb)
    
}
for (buttonNumber of numberButtons) {
    buttonNumber.addEventListener('click', numberButton);
}
