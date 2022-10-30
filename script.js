let screen = document.querySelector('.screen');
let displayValue = screen.textContent;
let operator;
let num1;
let num2;

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    let solution = a * b;
    return solution;
}

function divide (a, b) {
    let quotient = a / b;
    return quotient;
}

function operate (num1, num2, operator) {
    switch(operator) {
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return parseFloat(multiply(num1, num2).toFixed(6));
            break;
        case 'divide':
            if (num2 == 0) {
                return 'Err'
            } else {
                return parseFloat(divide(num1, num2).toFixed(6));
            }
    }
}

let numbers = document.querySelectorAll('.number');
for (let button of numbers) {
    button.addEventListener('click', function() {
        let digit = button.textContent;
        if (displayValue == '0') {
            displayValue = digit;
        } else {
        displayValue += digit;
        }
        screen.textContent = displayValue;
    });
}

let operators = document.querySelectorAll('.operator');
for (let button of operators) {
    button.addEventListener('click', function() {
        if (num1) {
            num2 = +displayValue;
            displayValue = '';
            num1 = operate(num1, num2, operator);
            operator = button.id;
            screen.textContent = num1;
        } else {
        num1 = +displayValue;
        displayValue = '';
        operator = button.id;
        }
    });
}

let equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', function() {
    if(num1) {
    num2 = +displayValue;
    let solution = operate(num1, num2, operator);
    screen.textContent = solution;
    }
});

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', function() {
    displayValue = '';
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    screen.textContent = displayValue;
});

let percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', function() {
    displayValue = screen.textContent;
    displayValue = +displayValue / 100;
    screen.textContent = displayValue;
});

let negateBtn = document.querySelector('#negate');
negateBtn.addEventListener('click', function() {
    displayValue = +displayValue * -1;
    screen.textContent = displayValue;
});

let decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', function() {
    if (displayValue.includes('.') == false){
    displayValue += decimalBtn.textContent;
    screen.textContent = displayValue;
    }
});