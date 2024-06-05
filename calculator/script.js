// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    
    let currentInput = '';
    let previousInput = '';
    let operator = '';
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.innerText = '0';
            } else if (value === '=') {
                if (currentInput !== '' && previousInput !== '' && operator !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    if (previousInput === '') {
                        previousInput = currentInput;
                        operator = value;
                        currentInput = '';
                    } else {
                        previousInput = calculate(previousInput, currentInput, operator);
                        operator = value;
                        currentInput = '';
                        display.innerText = previousInput;
                    }
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(num1, num2, operator) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        switch (operator) {
            case '+':
                return (n1 + n2).toString();
            case '-':
                return (n1 - n2).toString();
            case '*':
                return (n1 * n2).toString();
            case '/':
                return (n1 / n2).toString();
            default:
                return '0';
        }
    }
});
