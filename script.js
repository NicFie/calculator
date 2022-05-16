let userInput = 'addition';
let num1 = 0;
let num2 = 0;
let result = 0;
const calculatorContainer = document.querySelector('#calculator-container');
const infinityQuote = document.querySelector('#infinity-quote'); 
const refreshButton = document.querySelector('#refresh');

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
    } else console.log('something went wrong');
}



const display = document.querySelector('#display');
const runningTotal = document.querySelector('#running-total');
const numberButtons = document.querySelectorAll('.numbers');

let displayValue = 0;
let isEqualsPushed = false;

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        addEventListeners();
        if(isEqualsPushed == true) {
            num1 = 0;
            num2 = 0;
            userInput = 'addition';
            result = 0;
            display.innerHTML = '0';
            runningTotal.innerHTML = 0;
            runningTotal.style.visibility = 'visible';
            isEqualsPushed = false;
        }
        let numberValue = numberButton.innerHTML;
        if(display.innerHTML == '0') {
            display.innerHTML = numberValue
            displayValue = display.innerHTML;
        } else if(display.innerHTML.length > 25) {
            console.log('hi');
        } 
        else {
            display.innerHTML += numberValue;
            displayValue = display.innerHTML; 
        }
    })
})

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', getDecimalPoint);

function getDecimalPoint (e) {
    display.innerHTML += '.';
    displayValue = display.innerHTML;
    removeEventListeners();
    decimalButton.removeEventListener('click', getDecimalPoint);
}


const additionButton = document.querySelector('#addition');
const divisionButton = document.querySelector('#division');
const multiplicationButton = document.querySelector('#multiplication');
const subtractionButton = document.querySelector('#subtraction');

function getOperatorResult() {
    num1 = result;
    num2 = displayValue;
    operate(userInput, num1, num2);
    display.innerHTML = '';
    runningTotal.style.visibility = 'visible';
    decimalButton.addEventListener('click', getDecimalPoint);
    isThereDecimalPoint = false;
    isOperatorPressed = false;
}

function getAdditionOperatorResult(e) {
    getOperatorResult();
    userInput = 'addition';
    runningTotal.innerHTML = `${result} + `;
    isEqualsPushed = false;
    removeEventListeners();
}

function getSubtractionOperatorResult(e) {
    getOperatorResult();
    userInput = 'subtraction';
    runningTotal.innerHTML = `${result} - `;
    isEqualsPushed = false;
    removeEventListeners();
}

function getMultiplicationOperatorResult(e) {
    getOperatorResult();
    userInput = 'multiplication';
    runningTotal.innerHTML = `${result} x `;
    isEqualsPushed = false;
    removeEventListeners();
}

function getDivisionOperatorResult(e) {
    getOperatorResult();
    userInput = 'division';
    runningTotal.innerHTML = `${result} &#247 `;
    isEqualsPushed = false;
    removeEventListeners();
}
const equalsButton = document.querySelector('#equals');

function addEventListeners() {
    additionButton.addEventListener('click', getAdditionOperatorResult);
    subtractionButton.addEventListener('click', getSubtractionOperatorResult);
    multiplicationButton.addEventListener('click', getMultiplicationOperatorResult);
    divisionButton.addEventListener('click', getDivisionOperatorResult);
    equalsButton.addEventListener('click', getEqualsOperatorResult);
}

addEventListeners();

function removeEventListeners() {
    additionButton.removeEventListener('click', getAdditionOperatorResult);
    subtractionButton.removeEventListener('click', getSubtractionOperatorResult);
    multiplicationButton.removeEventListener('click', getMultiplicationOperatorResult);
    divisionButton.removeEventListener('click', getDivisionOperatorResult);
    equalsButton.removeEventListener('click', getEqualsOperatorResult);
}




equalsButton.addEventListener('click', getEqualsOperatorResult);

function getEqualsOperatorResult(e) {
    getOperatorResult();
    display.innerHTML = result;
    runningTotal.style.visibility = 'hidden';
    num2 = 0;
    displayValue = 0;
    userInput = 'addition';
    isEqualsPushed = true; 
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    num1 = 0;
    num2 = 0;
    userInput = 'addition';
    result = 0;
    display.innerHTML = '0';
    runningTotal.innerHTML = 0;
    runningTotal.style.visibility = 'visible';
})

const backspaceButton = document.querySelector('#backspace-button');
backspaceButton.addEventListener('click', () => {
    if (display.innerHTML == result) {
        let numString = display.innerHTML;
        numString = numString.toString();
        numString = numString.slice(0, -1);
        display.innerHTML = numString;
        displayValue = display.innerHTML;
        result = 0;
        
    } else {
        let numString = display.innerHTML;
        numString = numString.toString();
        const numStringLength = numString.length;
        if(numString.charAt(numStringLength - 1) == '.') {
            decimalButton.addEventListener('click', getDecimalPoint);
        }
        numString = numString.slice(0, -1);
        display.innerHTML = numString;
        displayValue = display.innerHTML;
    }

})

window.addEventListener('keydown', getKeyboardInput);
let isThereDecimalPoint = false;
let isOperatorPressed = false;

function getKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        addEventListeners();
        isOperatorPressed = false;
        if(isEqualsPushed == true) {
            num1 = 0;
            num2 = 0;
            userInput = 'addition';
            result = 0;
            display.innerHTML = '0';
            runningTotal.innerHTML = 0;
            runningTotal.style.visibility = 'visible';
            isEqualsPushed = false;
        }
        let numberValue = e.key;
        if(display.innerHTML == '0') {
            display.innerHTML = numberValue
            displayValue = display.innerHTML;
        } else if(display.innerHTML.length > 25) {
            console.log('hi');
        } 
        else {
            display.innerHTML += numberValue;
            displayValue = display.innerHTML; 
        }
    }
    if (e.key === '.') {
        if(isThereDecimalPoint == true) {
            console.log('hi');
        } else {
        getDecimalPoint();
        isThereDecimalPoint = true;
        isOperatorPressed = false;
        }
    }
    if (e.key === '=' || e.key === 'Enter') {
        if (isOperatorPressed == true) {
            console.log('hi')
        } else getEqualsOperatorResult();
    }
    if (e.key === 'Backspace') {
        if (display.innerHTML == result) {
            let numString = display.innerHTML;
            numString = numString.toString();
            numString = numString.slice(0, -1);
            display.innerHTML = numString;
            displayValue = display.innerHTML;
            result = 0;
            
        } else {
            let numString = display.innerHTML;
            numString = numString.toString();
            const numStringLength = numString.length;
            if(numString.charAt(numStringLength - 1) == '.') {
                decimalButton.addEventListener('click', getDecimalPoint);
            }
            numString = numString.slice(0, -1);
            display.innerHTML = numString;
            displayValue = display.innerHTML;
        }
    }
    if (e.key === 'Escape') {
        num1 = 0;
        num2 = 0;
        userInput = 'addition';
        result = 0;
        display.innerHTML = '0';
        runningTotal.innerHTML = 0;
        runningTotal.style.visibility = 'visible';
    }
    if (e.key === '+') {
        if (isOperatorPressed == true) {
            console.log('hi')
        } else {
            getAdditionOperatorResult();
            isOperatorPressed = true;
        }
    }
    if (e.key === '-') {
        if (isOperatorPressed == true) {
            console.log('hi')
        } else {
            getSubtractionOperatorResult();
            isOperatorPressed = true;
        }
    }
    if (e.key === '*') {
        if (isOperatorPressed == true) {
            console.log('hi')
        } else {
            getMultiplicationOperatorResult();
            isOperatorPressed = true;
        }
    }
    if (e.key === '/') {
        if (isOperatorPressed == true) {
            console.log('hi')
        } else {
            getDivisionOperatorResult();
            isOperatorPressed = true;
        }
    }
}