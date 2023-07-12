let firstNumber = 0;
let secondNumber = 0;
let displayValue = 0;
let operator = null;

let operatorButtons = document.querySelectorAll(".operator-button")
let numberButtons = document.querySelectorAll(".number-button")
let input = document.querySelector(".input");
let equalsButton = document.querySelector(".equals-button");
let clearButton = document.querySelector(".clear-button");


function getOperator() {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            operator = button.innerText;
            console.log(operator);
            input.innerText = operator;
        });
    });
}


    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (operator !== null) {
                secondNumber = parseFloat(button.innerText);
                input.innerText = secondNumber;
            } else {
                firstNumber = parseFloat(button.innerText);
                input.innerText = firstNumber;
            }
        });
    });


equalsButton.addEventListener('click', () => {
    console.log("first number: " + firstNumber);
    console.log("second number: " + secondNumber);
    console.log("result " + operate(operator, firstNumber, secondNumber));
    operator = null;
});

clearButton.addEventListener('click', () => { clear(); });


function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = undefined;
}

// function appendNumber(number) {
//     if (number === '.' && this.firstNumber.includes('.')) return
//     this.firstNumber = this.firstNumber.toString() + number.toString()
// }


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

