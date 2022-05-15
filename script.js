let userInput = 'addition';
let num1 = 0;
let num2 = 0;
let result = 0;
let numberArray = [];

//basic math operator functions

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
        alert('You can\'t divide by 0!');
    } else {
        return a/b;
    }
}

function operate(userInput, num1, num2) {
    if (userInput == 'addition') {
        num1 = Number(num1);
        num2 = Number(num2)
        result += add(num1, num2);   
    } else if(userInput == 'subtraction') {
        result += subtract(num1, num2);
    } else if(userInput == 'multiplication') {
        result += multiply(num1, num2);
    } else if(userInput == 'division') {
        result += divide(num1, num2);
    } else console.log('something went wrong');
}

operate(userInput, num1, num2);
console.log(result);

const display = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.numbers');

let displayValue = 0;

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        let numberValue = numberButton.innerHTML;
        console.log(numberValue);
        if(display.innerHTML == '0') {
            display.innerHTML = numberValue
            displayValue = display.innerHTML;
        } else if(display.innerHTML.length > 16) {
            console.log('hi');
        } 
        else {
            display.innerHTML += numberValue;
            displayValue = display.innerHTML; 
        }
    })
})

console.log(displayValue);

/* for addition button. 
When addition button is clicked, the display value is num1. 
when equals button is clicked, result is num1 + display value. */

const additionButton = document.querySelector('#addition');
const divisionButton = document.querySelector('#division');
const multiplicationButton = document.querySelector('#multiplication');
const subtractionButton = document.querySelector('#subtraction');

additionButton.addEventListener('click', () => {
    num1 += num1;
    num2 = displayValue;
    operate(userInput, num1, num2);
    display.innerHTML = '';
    userInput = 'addition';
})

subtractionButton.addEventListener('click', () => {
    num1 += num1;
    num2 = displayValue;
    operate(userInput, num1, num2);
    display.innerHTML = '';
    userInput = 'subtraction';
})

multiplicationButton.addEventListener('click', () => {
    num1 += num1;
    num2 = displayValue;
    operate(userInput, num1, num2);
    display.innerHTML = '';
    userInput = 'multiplication';
})

divisionButton.addEventListener('click', () => {
    num1 = displayValue;
    display.innerHTML = '';
    userInput = 'division';
})



const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', () => {
    num2 = displayValue;
    num2 = Number(num2);
    operate(userInput, num1, num2);
    display.innerHTML = result;
    
})

//Clear button 

function clear() {
    num1 = 0;
    num2 = 0;
    userInput = 'addition';
    result = 0;
    display.innerHTML = '0';
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    clear();
})

//array?