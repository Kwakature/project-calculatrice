let operatorButton = document.querySelectorAll(".operator")

function operatorSelector (event){
    const buttonOpe = event.target;
    const operation = buttonOpe.dataset.operator;

    console.log(operation)
}

for(let ope of operatorButton){
    ope.addEventListener('click',operatorSelector);
}