let userInput = 'addition';
let num1 = 0;
let num2 = 0;
let result = 0;
let displayValue = 0;
let isEqualsPushed = false;
let isOperatorPushed = false;
let numberValue = 0;

const calculatorContainer = document.querySelector('#calculator-container');
const infinityQuote = document.querySelector('#infinity-quote'); 
const refreshButton = document.querySelector('#refresh');
const display = document.querySelector('#display');
const runningTotal = document.querySelector('#running-total');
const numberButtons = document.querySelectorAll('.numbers');
const decimalButton = document.querySelector('.decimal');
const additionButton = document.querySelector('#addition');
const divisionButton = document.querySelector('#division');
const multiplicationButton = document.querySelector('#multiplication');
const subtractionButton = document.querySelector('#subtraction');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear-button');
const backspaceButton = document.querySelector('#backspace-button');


decimalButton.addEventListener('click', addDecimalPointToDisplay);
equalsButton.addEventListener('click', getEqualsOperatorResult);
clearButton.addEventListener('click', clear);
backspaceButton.addEventListener('click', backspace);
additionButton.addEventListener('click', getAdditionOperatorResult);
subtractionButton.addEventListener('click', getSubtractionOperatorResult);
multiplicationButton.addEventListener('click', getMultiplicationOperatorResult);
divisionButton.addEventListener('click', getDivisionOperatorResult);
equalsButton.addEventListener('click', getEqualsOperatorResult);
window.addEventListener('keydown', getKeyboardInput);


function getKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        numberValue = e.key;
        addNumbersToDisplay();
    }
    if (e.key === '.') addDecimalPointToDisplay();
    if (e.key === '=' || e.key === 'Enter') getEqualsOperatorResult();
    if (e.key === 'Backspace') backspace();
    if (e.key === 'Escape') clear();
    if (e.key === '+') getAdditionOperatorResult();
    if (e.key === '-') getSubtractionOperatorResult();
    if (e.key === '*') getMultiplicationOperatorResult();
    if (e.key === '/') getDivisionOperatorResult();
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if(b==0) {
        calculatorContainer.style.display = 'none';
        infinityQuote.style.display = 'block';
        refreshButton.style.display = 'block';
        return result;
    } else {
        return a/b;
    }
}

function operate(userInput, num1, num2) {
    if (userInput == 'addition') {
        num1 = Number(num1);
        num2 = Number(num2);
        result = add(num1, num2);   
    } else if(userInput == 'subtraction') {
        num1 = Number(num1);
        num2 = Number(num2);
        result = subtract(num1, num2);
    } else if(userInput == 'multiplication') {
        num1 = Number(num1);
        num2 = Number(num2);
        result = multiply(num1, num2);
    } else if(userInput == 'division') {
        num1 = Number(num1);
        num2 = Number(num2);
        result = divide(num1, num2);
    } else return;
}

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        numberValue = numberButton.innerHTML;
        addNumbersToDisplay();
    })
})

function addNumbersToDisplay() {
    isOperatorPushed = false;
    if(isEqualsPushed == true) {
        display.innerHTML += numberValue;
        displayValue = display.innerHTML; 
        userInput = 'addition';
        result = 0;
        runningTotal.innerHTML = 0;
        runningTotal.style.visibility = 'visible';
        isEqualsPushed = false;
    } else if(display.innerHTML == '0') {
        display.innerHTML = numberValue
        displayValue = display.innerHTML;
    } else if(display.innerHTML.length > 25) {
        return;
    } 
    else {
        display.innerHTML += numberValue;
        displayValue = display.innerHTML; 
    }
}

function addDecimalPointToDisplay (e) {
    if (isEqualsPushed == true) {
        result = 0;
        isEqualsPushed = false;
    }
    let displayString = display.innerHTML;
    if (displayString.includes('.') == true) {
        return;
    } else {
        display.innerHTML += '.';
        displayValue = display.innerHTML;
    }
}

function getOperatorResult() {
    num1 = result;
    num2 = displayValue;
    operate(userInput, num1, num2);
    display.innerHTML = '';
    runningTotal.style.visibility = 'visible';
    isOperatorPushed = true;
}

function getAdditionOperatorResult(e) {
    if (isOperatorPushed == false) {
        getOperatorResult();
        userInput = 'addition';
        runningTotal.innerHTML = `${result} + `;
        isEqualsPushed = false;
    } else {
        return;
    }
}

function getSubtractionOperatorResult(e) {
    if (isOperatorPushed == false) {
        getOperatorResult();
        userInput = 'subtraction';
        runningTotal.innerHTML = `${result} - `;
        isEqualsPushed = false;
    } else {
        return;
    }
}

function getMultiplicationOperatorResult(e) {
    if (isOperatorPushed == false) {
        getOperatorResult();
        userInput = 'multiplication';
        runningTotal.innerHTML = `${result} x `;
        isEqualsPushed = false;
    } else {
        return;
    }
}

function getDivisionOperatorResult(e) {
    if (isOperatorPushed == false) {
        getOperatorResult();
        userInput = 'division';
        runningTotal.innerHTML = `${result} &#247 `;
        isEqualsPushed = false;
    } else {
        return;
    }
}

function getEqualsOperatorResult(e) {
    if (isOperatorPushed == false) getOperatorResult();
    display.innerHTML = result;
    runningTotal.style.visibility = 'hidden';
    num2 = 0;
    displayValue = 0;
    userInput = 'addition';
    isEqualsPushed = true; 
    isOperatorPushed = false;
}

function clear(e) {
    num1 = 0;
    num2 = 0;
    userInput = 'addition';
    result = 0;
    displayValue = 0;
    display.innerHTML = '0';
    runningTotal.innerHTML = 0;
    runningTotal.style.visibility = 'visible';
    isEqualsPushed = false;
    isOperatorPushed = false;
}

function backspace(e) {
    if (display.innerHTML == result) {
        let numString = display.innerHTML;
        numString = numString.toString();
        numString = numString.slice(0, -1);
        display.innerHTML = numString;
        displayValue = display.innerHTML;
        result = 0;
        isEqualsPushed = false;
        
    } else {
        let numString = display.innerHTML;
        numString = numString.toString();
        const numStringLength = numString.length;
        numString = numString.slice(0, -1);
        display.innerHTML = numString;
        displayValue = display.innerHTML;
    }
}
