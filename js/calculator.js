const firstOperandDisplay = document.querySelector('#num1');
const secondOperandDisplay = document.querySelector('#num2');
const operatorDisplay = document.querySelector('#operator');
const displayResult = document.querySelector('.display');

let operatorPressed = false;
let firstOperand = '';
let secondOperand = '';
let operator = undefined;

const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        if (operatorPressed === true) {
            secondOperand += operand.value;
            secondOperandDisplay.textContent = secondOperand;
        } else {
            firstOperand += operand.value;
            firstOperandDisplay.textContent = firstOperand;
        }
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(op => {
    op.addEventListener('click', () => {
        operatorPressed = true;
        operator = op.value;
        operatorDisplay.textContent = operator;
    });
});

const equlsBtn = document.querySelector('.equals');
equlsBtn.addEventListener('click', () => {operate(operator, firstOperand, secondOperand)}); 

function add(num1, num2) {
    displayResult.textContent = +num1 + +num2;
}

function sub(num1, num2) {
    displayResult.textContent = +num1 - +num2;
}

function div(num1, num2) {
    displayResult.textContent = +num1 / +num2;
}

function multi(num1, num2) {
    displayResult.textContent = +num1 * +num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            sub(num1, num2);
                break;
        case '/':
            div(num1, num2);
            break;
        case 'x':
            multi(num1, num2);
            break;
        default:
            console.log("Error :(");
    }
}


