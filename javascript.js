let firstNumber = 0;
let secondNumber = 0;
let displayValue = 0;
let operator = null;

let operatorButtons = document.querySelectorAll(".operator-button")
let numberButtons = document.querySelectorAll(".number-button")
let input = document.querySelector(".input");

function getOperator() {
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            operator = button.innerText
            input.innerText = operator;

        });
    });
}

function getNumberInput() {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            displayValue = parseInt(button.innerText);
            input.innerText = displayValue;
        });
    });
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
        default:
            return null;
    }

}

function populateDisplay() {
    getNumberInput();
    getOperator()
}

populateDisplay();