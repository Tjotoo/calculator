let firstNumber = 0;
let secondNumber = 0;
let currentOperation = null;
let shouldResetScreen = false;

let numberButtons = document.querySelectorAll("[data-number]")
let operatorButtons = document.querySelectorAll("[data-operator]")
let equalsButton = document.querySelector(".equals-button");
let clearButton = document.querySelector(".clear-button");
let pointButton = document.querySelector(".point-button");
let deleteButton = document.querySelector(".delete-button");
let currentInput = document.querySelector(".current-input");
let lastInput = document.querySelector(".last-input");


equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
pointButton.addEventListener('click', addPoint);
deleteButton.addEventListener('click', deleteNumber);

function appendNumber(number) {
    if (currentInput.textContent === '0' || shouldResetScreen)
        clearScreen();
    currentInput.textContent += number;
}

function addPoint() {
    if (shouldResetScreen) clearScreen()
    if (currentInput.textContent === '')
        currentInput.textContent = '0'
    if (currentInput.textContent.includes('.')) return
    currentInput.textContent += '.'
}

function deleteNumber() {
    currentInput.textContent = currentInput.textContent.toString().slice(0, -1)
}

function clearScreen() {
    currentInput.textContent = '';
    shouldResetScreen = false;
}

numberButtons.forEach(button =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorButtons.forEach(button =>
    button.addEventListener('click', () => setOperation(button.textContent))
);

function setOperation(operator) {
    if(currentOperation !== null) evaluate();
    firstNumber = currentInput.textContent;
    currentOperation = operator;
    lastInput.textContent = `${firstNumber} ${currentOperation}`
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentInput.textContent === '0') {
        alert("Can't divide by 0!")
        return
    }
    secondNumber = currentInput.textContent;
    currentInput.textContent = roundResult(operate(currentOperation, firstNumber, secondNumber));
    console.log(roundResult(operate(currentOperation, firstNumber, secondNumber)));
    lastInput.textContent = `${firstNumber} ${currentOperation} ${secondNumber} =`
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function clear() {
    currentInput.textContent = '0';
    lastInput.textContent = '';
    firstNumber = "";
    secondNumber = "";
    currentOperation = null;
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
        case '×':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null;
    }
}


