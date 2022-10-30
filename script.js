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
    let result = a * b;
    return result;
}

function divide (a, b) {
    let result = a / b;
    return result;
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
                return 'error'
            } else {
                return parseFloat(divide(num1, num2).toFixed(6));
            }
    }
}
