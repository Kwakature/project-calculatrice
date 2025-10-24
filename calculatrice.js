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
